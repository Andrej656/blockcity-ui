// utils/stacksApi.js
import fetch from 'cross-fetch';
import { Configuration, AccountsApi } from '@stacks/blockchain-api-client';

export async function fetchNFTHoldings(principal, assetIdentifiers = [], limit = 10, offset = 0, unanchored = false, txMetadata = false) {
  const apiUrl = 'https://api.testnet.hiro.so'; // Replace with the actual Stacks API URL

  const apiConfig = new Configuration({
    fetchApi: fetch,
    basePath: apiUrl,
  });

  const accountsApi = new AccountsApi(apiConfig);

  try {
    const txs = await accountsApi.getAccountTransactions({
      principal,
      asset_identifiers: assetIdentifiers.join(','),
      limit,
      offset,
      unanchored,
      tx_metadata: txMetadata,
    });

    return txs;
  } catch (error) {
    console.error('Error fetching NFT holdings:', error.message);
    throw error;
  }
}
