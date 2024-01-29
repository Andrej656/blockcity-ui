(define-data-var user-nfts (map principal (list uint)))
(define-data-var user-stakes (map principal (list (tuple (nft-id uint) (percentage uint)))))
(define-data-var nft-status (map uint string))
(define-data-var nft-prices (map uint uint))
(define-data-var nft-earnings (map uint uint))
(define-data-var last-price-oracle-response (tuple (stx-usd uint)))

(define-public (mint-nft (nft-id uint) (owner principal))
  (map-insert! user-nfts owner (if (map-has-key? user-nfts owner) (append-item (map-get user-nfts owner) nft-id) (list nft-id)))
  (ok true))

(define-public (stake-nft (nft-id uint) (owner principal) (percentage uint))
  (if (map-has-key? user-nfts owner)
    (begin
      (map-insert! user-stakes owner (append-item (map-get user-stakes owner) (tuple nft-id percentage)))
      (ok true))
    (err "User does not own NFT")))

(define-public (unstake-nft (nft-id uint) (owner principal))
  (if (map-has-key? user-nfts owner)
    (begin
      (map-delete! user-stakes owner (tuple nft-id _))
      (ok true))
    (err "User does not own NFT")))

(define-public (list-nft-for-sale (nft-id uint) (price uint))
  (map-insert! nft-status nft-id "For Sale")
  (map-insert! nft-prices nft-id price)
  (ok true))

(define-public (buy-nft (nft-id uint) (buyer principal))
  (if (and (map-has-key? nft-status nft-id) (= (map-get nft-status nft-id) "For Sale"))
    (begin
      (let ((seller (get-seller nft-id)))
        (map-delete! nft-status nft-id)
        (map-delete! nft-prices nft-id)
        (transfer-funds seller buyer (map-get nft-prices nft-id))
        (ok true)))
    (err "NFT not available for purchase")))

(define-public (get-user-nfts (owner principal))
  (ok (map-get user-nfts owner)))

(define-private (get-seller (nft-id uint))
  (unwrap-panic (map-get nft-status nft-id)))

(define-private (transfer-funds (from principal) (to principal) (amount uint))
  (stx-transfer? amount from to))

(define-public (get-last-price)
  last-price-oracle-response)

(define-public (update-last-price)
  ; Call your Oracle API and update last-price-oracle-response
  (ok true))
