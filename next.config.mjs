
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'fullscreen=(self "https://player.vimeo.com")',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
