import { useEffect, useState } from 'react';
import Layout from "@/components/layout/Layout";
import Header1 from "../components/layout/header/Header1";
import SliderScroll from "../pages/slider-scroll";

export default function Home() {
  return (
    <Layout header={<Header1 />} headerStyle={1} footerStyle={1} pageCls="slider-scroll">
      <SliderScroll />
    </Layout>
  );
}
