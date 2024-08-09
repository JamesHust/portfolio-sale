/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: { // Config allow domain image here
        domains: ['fptcloud.com'],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
