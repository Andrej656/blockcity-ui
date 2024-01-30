// components/elements/NFTList.js

import React, { useState, useEffect } from 'react';
import { getNFTs } from '../../util/stacks-api'; // Import the function to fetch NFTs

const NFTList = ({ principalAddress, assetIdentifiers }) => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    // Fetch NFTs when the component mounts
    const fetchNFTs = async () => {
      try {
        const nftsData = await getNFTs(principalAddress, assetIdentifiers);
        setNFTs(nftsData);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, [principalAddress, assetIdentifiers]);

  return (
    <div>
      <h2>Your NFTs</h2>
      {nfts.map((nft, index) => (
        <div key={index}>
          <p>{`NFT ${index + 1}: ${nft.name} - ${nft.description}`}</p>
          {/* Render additional details based on your needs */}
          <p>{`Owner: ${nft.owner}`}</p>
          <p>{`Price: ${nft.price}`}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default NFTList;
