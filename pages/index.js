import { useEffect, useState } from 'react';
import Layout from "@/components/layout/Layout";


export default function Home() {
  const principalAddress = 'ST000000000000000000002AMW42H';
  const assetIdentifiers = ['asset1', 'asset2'];

  const apiEndpoint = 'https://api.mainnet.hiro.so/extended/v1/tokens/nft/holdings';

  const [nftHoldings, setNftHoldings] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiEndpoint}?principal=${principalAddress}&assets=${assetIdentifiers.join(',')}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setNftHoldings(data.results || []);
      } else {
        console.error('Failed to fetch NFT holdings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching NFT holdings:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} pageCls="slider-sroll">
        <FlatTitle1 />
        <FeaturedItem1 />
        <Seller1 />
        <DiscoverItem1 />
        <TopCollector1 />
        <TopCollections1 />
        <CreateSell1 />
        <Action1 />

        {/* Render NFT Holdings */}
        <section>
          <h2>NFT Holdings</h2>
          <ul>
            {nftHoldings.map((holding, index) => (
              <li key={index}>
                {/* Render NFT holding details as needed */}
                {JSON.stringify(holding)}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
