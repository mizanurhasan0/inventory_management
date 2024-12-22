/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'www.thedotstore.com',
                pathname: '/wp-content/**',
            },
        ],
    },
};

export default nextConfig;
