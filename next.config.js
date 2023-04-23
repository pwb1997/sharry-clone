/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
};

module.exports = nextConfig;
