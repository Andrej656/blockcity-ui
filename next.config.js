// next.config.js
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Add any existing redirects if necessary
    ];
  },
  async rewrites() {
    return [
      // Add any existing rewrites if necessary
    ];
  },
  async headers() {
    return [
      // Add any existing headers if necessary
    ];
  },
  // Set slider-scroll.js as the landing page
  exportPathMap: async function () {
    return {
      '': { page: '/slider-scroll' },
    };
  },
}

module.exports = nextConfig;
