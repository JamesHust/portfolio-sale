/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [{
            source: '/',
            destination: '/bots',
            permanent: false,
        }]
    },
    output: "standalone",
    images: { // Config allow domain image here
        domains: ['s3-sgn09.fptcloud.com'],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
