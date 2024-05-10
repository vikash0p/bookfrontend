/** @type{import('next').nextConfig} */


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
            },
            {
                protocol: 'https',
                hostname: "img.freepik.com",
            },

        ],
    },

};

export default nextConfig;
