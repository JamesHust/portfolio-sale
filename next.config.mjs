/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [{
            source: '/',
            destination: '/thanhdt66',
            permanent: false,
        }]
    },
    output: "standalone",
    images: { // Config allow domain image here
        domains: ['fptcloud.com'],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
