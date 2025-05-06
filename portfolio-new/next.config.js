/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Enable static exports for GitHub Pages
    output: 'export',
    // Configure images
    images: {
        unoptimized: true,
        domains: [], // Add any image domains you'll use
    },
}

module.exports = nextConfig 