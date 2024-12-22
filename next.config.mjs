/** @type {import('next').NextConfig} */
const nextConfig = {
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
