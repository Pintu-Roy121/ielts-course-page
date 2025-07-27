/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'api.10minuteschool.com',
      'cdn.10minuteschool.com',
      'img.youtube.com',
      'i.ytimg.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.10minuteschool.com',
      },
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
      }
    ],
  },
  // Enable ISR (Incremental Static Regeneration)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.10minuteschool.com/:path*',
      },
    ];
  },
  // Configure headers for API requests
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-TENMS-SOURCE-PLATFORM',
            value: 'web',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

