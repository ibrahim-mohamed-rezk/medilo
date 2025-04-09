/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gold-goose-774583.hostingersite.com'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'gold-goose-774583.hostingersite.com',
            },
            {
                protocol: 'https',
                hostname: 'gold-goose-774583.hostingersite.com',
            },
        ],
    },
};

export default nextConfig;
