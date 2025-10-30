/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // ✅ أسرع من Terser
  poweredByHeader: false, // يخفي X-Powered-By header
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|css|js|woff2?)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons"], // ✅ يقلل حجم الباندل
  },
};

export default nextConfig;
