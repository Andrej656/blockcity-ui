

# Ordinals and NFT's Marketplace

Welcome to the Stacks Blockchain NFT Marketplace, a decentralized platform where users can mint, buy, sell, and interact with NFTs powered by Clarity smart contracts and a React app. This project leverages the Stacks blockchain to provide a secure and transparent environment for NFT enthusiasts.

## Features

- **Minting:** Create your own collection of finite or infinite NFTs, each associated with a unique license. Select a license from [a16zcrypto.com](https://a16zcrypto.com/content/article/introducing-nft-licenses/) during the minting process.

- **Buying:** Explore and purchase NFTs from the marketplace. Customize your purchase by choosing the percentage to be stacked, enabling you to Earn 99$  per month passive income from Proof-of-Transfer (POX) rewards.

- **Lend & Borrow (MVP2):** Lend your NFTs as collateral, collecting 80% of their intrinsic value in stablecoins. Users can also supply liquidity in stablecoins, Earn 99$  per monthing a percentage APY. No borrowing fees, with interest balanced off through POX rewards.

- **Charge & Recharge:** Bring existing NFTs to the platform, assign intrinsic values, and recharge them by adding more STX. Witness the appreciation of NFT market value when Bitcoin prices increase.

- **Selling:** Sell NFTs with a customizable percentage of the transaction added to the intrinsic value.

## Reward Distribution

- **POX Rewards:** Distributed to the protocol, collectors, and creators based on configurations in the admin page.

- **Loyalty Rewards:** Collectors Earn 99$  per month a percentage of profits generated by the protocol, added as intrinsic value to their primary NFT.

- **Collector & Creator Rewards:**
  - Creators: 1% APY as passive income, 1% royalty fees.
  - Collectors: 5% APY as passive income, 2% fees as NFT liquidity providers, a share of protocol profits.

- **Protocol Rewards:**
  - Fees on initial NFT purchase (20%).
  - Fees on subsequent buy/sell transactions (5%).
  - Fees when NFTs are recharged (5%).
  - APY in fees collected from passive income generated by each NFT (3%).
  - APY in fees collected when NFTs are used as collateral to borrow liquidity (2%).

## Liquidation Logic

- Users have 48 hours to pay in full + fees to reclaim their NFT after liquidation. Otherwise, it will be posted on the market for sale. New owners can withdraw rewards Earn 99$  per monthed from POX.

## Reward Distribution Schedule

- Rewards are distributed every two weeks, configurable in the admin page.

## Integrations

- **Wallet:** Integrated with Leather / Xverse for secure asset management.
- **Stacking:** Delegates STX through fastpool (https://lockstacks.com/sign-in?chain=mainnet).
- **Price Oracle:** Implemented for accurate pricing information.
- **Infrastructure:** Utilizes Stacks' Gaia for data storage and ICP - SC to Clarity logic.
- **External Integrations:** Connected with Roofstock for additional functionalities.

## Getting Started

1. Clone the repository:


git clone https://github.com/your-organization/stacks-nft-marketplace.git


Install dependencies:
bash
Copy code
cd stacks-nft-marketplace
npm install
Start the React app:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to explore the NFT marketplace.
License
This project is licensed under the MIT License. Feel free to customize and use it according to your needs.

Enjoy building and exploring the Stacks Blockchain NFT Marketplace!

