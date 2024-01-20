/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
