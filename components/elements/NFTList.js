// components/NFTList.js
import React, { useState, useEffect } from 'react';
import { fetchNFTHoldings } from '../utils/stacksApi';

function NFTList({ principalAddress, assetIdentifiers }) {
  const [nftHoldings, setNFTHoldings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNFTHoldings(principalAddress, assetIdentifiers);
        setNFTHoldings(result);
      } catch (error) {
        console.error('Error fetching NFT holdings:', error);
      }
    };

    fetchData();
  }, [principalAddress, assetIdentifiers]);

  return (
    <div>
      <h2>Your NFT Holdings</h2>
      <ul>
        {nftHoldings.map((nft) => (
          <li key={nft.tx_id}>
            {/* Render NFT details here */}
            {nft.tx_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NFTList;
