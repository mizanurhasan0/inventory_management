/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        });
        return config;
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
