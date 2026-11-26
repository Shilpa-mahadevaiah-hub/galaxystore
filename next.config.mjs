/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   cacheComponents: true,
   partialPrefetching: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/product-images/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        pathname: "/icon/**",
      },
    ],
  },
};

export default nextConfig;
