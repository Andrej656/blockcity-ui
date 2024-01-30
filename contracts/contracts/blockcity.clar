


;; Import SIP009 and SIP010 traits
(use-trait nft-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)
(use-trait ft-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip010-trait)

(define-constant contract-owner tx-sender)

;; Listing errors
(define-constant err-expiry-in-past (err u1000))
(define-constant err-price-zero (err u1001))

;; Cancelling and fulfilling errors
(define-constant err-unknown-listing (err u2000))
(define-constant err-unauthorised (err u2001))
(define-constant err-listing-expired (err u2002))
(define-constant err-nft-asset-mismatch (err u2003))
(define-constant err-payment-asset-mismatch (err u2004))
(define-constant err-maker-taker-equal (err u2005))
(define-constant err-unintended-taker (err u2006))
(define-constant err-asset-contract-not-whitelisted (err u2007))
(define-constant err-payment-contract-not-whitelisted (err u2008))

;; Data storage
(define-map listings
    uint
    {
        maker: principal,
        taker: (optional principal),
        token-id: uint,
        nft-asset-contract: principal,
        expiry: uint,
        price: uint,
        payment-asset-contract: (optional principal)
    }
)

(define-data-var listing-nonce uint u0)

;; Asset whitelist
(define-map whitelisted-asset-contracts principal bool)

(define-read-only (is-whitelisted (asset-contract principal))
    (default-to false (map-get? whitelisted-asset-contracts asset-contract))
)

(define-public (set-whitelisted (asset-contract principal) (whitelisted bool))
    (begin
        (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
        (ok (map-set whitelisted-asset-contracts asset-contract whitelisted))
    )
)

;; SIP009 NFT Mint function
(define-public (mint-nft (recipient principal))
    (let ((token-id (+ (var-get token-id-nonce) u1)))
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (try! (nft-mint? stacksies token-id recipient))
        (asserts! (var-set token-id-nonce token-id) err-token-id-failure)
        (ok token-id)
    )
)

;; SIP010 FT Mint function
(define-public (mint-ft (amount uint) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (ft-mint? amazing-coin amount recipient)
    )
)

;; Helper functions for transferring NFTs and FTs
(define-private (transfer-nft (token-contract <nft-trait>) (token-id uint) (sender principal) (recipient principal))
    (contract-call? token-contract transfer token-id sender recipient)
)

(define-private (transfer-ft (token-contract <ft-trait>) (amount uint) (sender principal) (recipient principal))
    (contract-call? token-contract transfer amount sender recipient none)
)

;; Listing an NFT
(define-public (list-asset (nft-asset-contract <nft-trait>) (nft-asset {taker: (optional principal), token-id: uint, expiry: uint, price: uint, payment-asset-contract: (optional principal)}))
    (let ((listing-id (var-get listing-nonce)))
        (asserts! (is-whitelisted (contract-of nft-asset-contract)) err-asset-contract-not-whitelisted)
        (asserts! (> (get expiry nft-asset) block-height) err-expiry-in-past)
        (asserts! (> (get price nft-asset) u0) err-price-zero)
        (asserts! (match (get payment-asset-contract nft-asset) payment-asset (is-whitelisted payment-asset) true) err-payment-contract-not-whitelisted)
        (try! (transfer-nft nft-asset-contract (get token-id nft-asset) tx-sender (as-contract tx-sender)))
        (map-set listings listing-id (merge {maker: tx-sender, nft-asset-contract: (contract-of nft-asset-contract)} nft-asset))
        (var-set listing-nonce (+ listing-id u1))
        (ok listing-id)
    )
)

;; Cancelling a listing
(define-public (cancel-listing (listing-id uint) (nft-asset-contract <nft-trait>))
    (let (
        (listing (unwrap! (map-get? listings listing-id) err-unknown-listing))
        (maker (get maker listing))
        )
        (asserts! (is-eq maker tx-sender) err-unauthorised)
        (asserts! (is-eq (get nft-asset-contract listing) (contract-of nft-asset-contract)) err-nft-asset-mismatch)
        (map-delete listings listing-id)
        (as-contract (transfer-nft nft-asset-contract (get token-id listing) tx-sender maker))
    )
)

;; Retrieve a listing by ID
(define-read-only (get-listing (listing-id uint))
    (map-get? listings listing-id)
)
;; Fulfillment in STX

(define-public (fulfil-listing-stx (listing-id uint) (nft-asset-contract <nft-trait>))
    (let (
        (listing (unwrap! (map-get? listings listing-id) err-unknown-listing))
        (taker tx-sender)
        )
        (try! (assert-can-fulfil (contract-of nft-asset-contract) none listing))
        (try! (as-contract (transfer-nft nft-asset-contract (get token-id listing) tx-sender taker)))
        (try! (stx-transfer? (get price listing) taker (get maker listing)))
        (map-delete listings listing-id)
        (ok listing-id)
    )
)

;; Fulfillment in SIP010 Fungible Tokens

(define-public (fulfil-listing-ft (listing-id uint) (nft-asset-contract <nft-trait>) (payment-asset-contract <ft-trait>))
    (let (
        (listing (unwrap! (map-get? listings listing-id) err-unknown-listing))
        (taker tx-sender)
        )
        (try! (assert-can-fulfil (contract-of nft-asset-contract) (some (contract-of payment-asset-contract)) listing))
        (try! (as-contract (transfer-nft nft-asset-contract (get token-id listing) tx-sender taker)))
        (try! (transfer-ft payment-asset-contract (get price listing) taker (get maker listing)))
        (map-delete listings listing-id)
        (ok listing-id)
    )
)

