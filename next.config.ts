/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  },
  async rewrites() {
    return [
      {
        source: "/backend/api/:path*",
        destination: `${process.env.BACKEND_API_URL}/:path*`
      }
    ]
  },
}

module.exports = nextConfig
