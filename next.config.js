/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n,
// };

// module.exports = withBundleAnalyzer({
//   ...nextConfig,
// });
