// pages/showcase.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Showcase = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the slider-scroll page
    router.push('/slider-scroll');
  }, [router]);

  return null; // Return null to avoid any rendering on this page
};

export default Showcase;
