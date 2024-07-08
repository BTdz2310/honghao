/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'out',
    images: {
        remotePatterns: [
            {
                // protocol: 'https | http',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
