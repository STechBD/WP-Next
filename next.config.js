/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.shikkhaweb.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}