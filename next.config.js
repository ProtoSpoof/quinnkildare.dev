/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/*',
          },
        ],
        minimumCacheTTL: 50,
    }
}

module.exports = nextConfig
