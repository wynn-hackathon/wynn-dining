/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    //loader: 'custom',
    domains: ['images.ctfassets.net'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}
module.exports = nextConfig
