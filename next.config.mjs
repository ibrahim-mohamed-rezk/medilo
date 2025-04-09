/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gold-goose-774583.hostingersite.com",
        port: "",
        pathname: "/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "gold-goose-774583.hostingersite.com",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
