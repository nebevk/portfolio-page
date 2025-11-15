/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Enable static exports for GitHub Pages
    output: 'export',
    // Configure images
    images: {
        unoptimized: true,
        domains: [], // Add any image domains you'll use
    },
    // Next.js 15 specific optimizations
    experimental: {
        optimizePackageImports: ['framer-motion'],
    },
    // Turbopack configuration (stable in Next.js 15)
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    // Ensure proper module resolution
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
}

module.exports = nextConfig 