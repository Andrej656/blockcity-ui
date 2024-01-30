import Layout from "@/components/layout/Layout";
import Action1 from "@/components/sections/Action1";
import CreateSell1 from "@/components/sections/CreateSell1";
import DiscoverItem1 from "@/components/sections/DiscoverItem1";
import FeaturedItem1 from "@/components/sections/FeaturedItem1";
import FlatTitle1 from "@/components/sections/FlatTitle1";
import Seller1 from "@/components/sections/Seller1";
import TopCollections1 from "@/components/sections/TopCollections1";
import TopCollector1 from "@/components/sections/TopCollector1";
import NFTList from "@/components/NFTList"; // Import the NFTList component

export default function Home() {
  const principalAddress = 'ST000000000000000000002AMW42H'; // Replace with your Stacks address
  const assetIdentifiers = ['asset1', 'asset2']; // Array of asset identifiers to filter for

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} pageCls="home-1">
        <FlatTitle1 />
        <FeaturedItem1 />
        <Seller1 />
        <DiscoverItem1 />
        <TopCollector1 />
        <TopCollections1 />
        <CreateSell1 />
        <Action1 />

        {/* Add the NFTList component with the required props */}
        <NFTList principalAddress={principalAddress} assetIdentifiers={assetIdentifiers} />
      </Layout>
    </>
  );
}
