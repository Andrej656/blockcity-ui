(define-data-var user-nfts (map principal (list uint)))
(define-data-var user-stakes (map principal (list (tuple (nft-id uint) (percentage uint)))))
(define-data-var nft-status (map uint string))
(define-data-var nft-prices (map uint uint))
(define-data-var nft-earnings (map uint uint))
(define-data-var last-price-oracle-response (tuple (stx-usd uint)))
(define-data-var coingecko-api-url "https://api.coingecko.com/api/v3/simple/price?ids=stacks&vs_currencies=usd")
(define-data-var admin-address "SP1GDFGHR0DJESZNCN4HZDGW4ZBNM1M7X1A7TFV3W")

(define-public (get-user-nfts)
  (ok (map-entries (at-block user-nfts))))

(define-public (get-user-stakes)
  (ok (map-entries (at-block user-stakes))))

(define-public (get-nft-info (_nft-id uint))
  (ok (map-merge
       (map-merge
        (map (at-block user-nfts))
        (map (at-block user-stakes)))
       (map-merge
        (map (at-block nft-status))
        (map (at-block nft-earnings))))))

(define-read-only (get-last-price)
  (ok (at-block last-price-oracle-response)))

(define-public (update-price-oracle)
  (if (principals-equal? (get-principal (tx-sender)) (stx-principal))
      (begin
        (let ((oracle-response (http-get coingecko-api-url)))
          (if (err? oracle-response)
              (err "Error fetching price from Coingecko")
              (begin
                (map-set last-price-oracle-response (get-principal (tx-sender)) oracle-response)
                (ok "Price oracle updated")))))
      (err "Unauthorized access")))

(define-private (is-admin)
  (if (principals-equal? (get-principal (tx-sender)) admin-address)
      true
      false))

(define-private (is-contract-caller-admin)
  (if (principals-equal? (contract-principal) (stx-principal))
      true
      false))

(define-public (mint-nft (_creator principal) (_collection principal) (_type uint) (_metadata string) (_intrinsic-value uint))
  (if (and (is-contract-caller-admin) (is-admin))
      (begin
        (let ((nft-id (get-nft-id _creator _collection _type)))
          (map-set user-nfts (get-principal (tx-sender)) (append (map-get user-nfts (get-principal (tx-sender))) nft-id))
          (map-set nft-status nft-id "Minted")
          (map-set nft-prices nft-id 0)
          (map-set nft-earnings nft-id 0)
          (ok nft-id)))
      (err "Unauthorized access"))

(define-public (stake-nft (_nft-id uint) (_percentage uint))
  (if (is-contract-caller-admin)
      (begin
        (if (and (<= _percentage 100) (>= _percentage 0))
            (begin
              (let* ((total-stake (fold 
                                   (at-block user-stakes)
                                   (u0 (tuple (total uint) (percentage uint)))
                                   (fold (at u0) 
                                         (list 
                                          (if (principals-equal? (get-principal (map-get user-stakes (get-principal (tx-sender)))) (get-principal (tx-sender)))
                                              (u1 (tuple (total (+ (tuple-get total u1) (tuple-get percentage u1))) (percentage (tuple-get percentage u1))))
                                              (u2 (tuple (total (tuple-get total u2)) (percentage (tuple-get percentage u2))))))
                                         (tuple (total 0) (percentage 0)))))
                (if (> (+ (tuple-get percentage total-stake) _percentage) 100)
                    (err "Stake percentage exceeds 100%")
                    (begin
                      (map-set user-stakes (get-principal (tx-sender)) (append (map-get user-stakes (get-principal (tx-sender))) (tuple (nft-id _nft-id) (percentage _percentage))))
                      (ok "NFT staked")))))
            (err "Invalid percentage")))
      (err "Unauthorized access")))

(define-public (unstake-nft (_nft-id uint))
  (if (is-contract-caller-admin)
      (begin
        (let* ((stake-info (fold 
                             (at-block user-stakes)
                             (u0 (tuple (total uint) (percentage uint)))
                             (fold (at u0) 
                                   (list 
                                    (if (principals-equal? (get-principal (map-get user-stakes (get-principal (tx-sender)))) (get-principal (tx-sender)))
                                        (u1 (tuple (total (tuple-get total u1)) (percentage (tuple-get percentage u1))))
                                        (u2 (tuple (total (tuple-get total u2)) (percentage (tuple-get percentage u2))))))
                                   (tuple (total 0) (percentage 0)))))
          (let* ((user-stake (at u1 (map-get user-stakes (get-principal (tx-sender))))))
            (if (not (list-contains? (map-get user-stake 0) _nft-id))
                (err "NFT not staked by user")
                (begin
                  (map-set user-stakes (get-principal (tx-sender)) (remove-nft-stake (map-get user-stakes (get-principal (tx-sender))) _nft-id))
                  (ok "NFT unstaked")))))
      (err "Unauthorized access")))

(define-public (list-nft-for-sale (_nft-id uint) (_sale-price uint) (_duration uint))
  (if (is-contract-caller-admin)
      (begin
        (map-set nft-status _nft-id "For Sale")
        (map-set nft-prices _nft-id _sale-price)
        (ok "NFT listed for sale"))
      (err "Unauthorized access")))

(define-public (buy-nft (_nft-id uint) (_bid-amount uint))
  (if (is-contract-caller-admin)
      (begin
        (let* ((seller (get-principal (map-get user-nfts _nft-id))))
          (stx-transfer? _bid-amount (stx-principal) seller)
          (map-set nft-status _nft-id "Sold")
          (map-set nft-earnings _nft-id (+ (map-get nft-earnings _nft-id) _bid-amount))
          (ok "NFT bought")))
      (err "Unauthorized access")))

(define-private (remove-nft-stake (_stake-list (list (tuple (nft-id uint) (percentage uint)))) (_nft-id uint))
  (if (is-empty? _stake-list)
      (list)
      (if (= (map-get (at _stake-list 0) 0) _nft-id)
          (remove-nft-stake (list-drop 1 _stake-list) _nft-id)
          (cons (at _stake-list 0) (remove-nft-stake (list-drop 1 _stake-list) _nft-id)))))

(define-public (distribute-earnings)
  (if (and (is-contract-caller-admin) (is-admin))
      (begin
        (let* ((nft-list (map-merge (at-block nft-prices) (at-block nft-earnings))))
          (fold 
           (at-block user-nfts)
           (u0 (tuple (total uint) (percentage uint)))
           (fold (at u0) 
                 (list 
                  (u1 (tuple (total (tuple-get total u1)) (percentage (tuple-get percentage u1)))))
                 (let* ((user-stakes (map-get user-stakes (get-principal (at u1 0)))))
                   (fold 
                    user-stakes
                    (u2 (tuple (total uint) (percentage uint)))
                    (fold (at u2) 
                          (list 
                           (u3 (tuple (total (tuple-get total u3)) (percentage (tuple-get percentage u3)))))
                          (begin
                            (let* ((nft-id (at u3 0))
                                   (percentage (at u3 1))
                                   (earnings (div (mul (at nft-list nft-id) percentage) 100)))
                              (stx-transfer? earnings (stx-principal) (get-principal (at u1 0)))
                              (map-set nft-earnings nft-id (- (at nft-earnings nft-id) earnings)))))))))))
        (ok "Earnings distributed"))
      (err "Unauthorized access")))