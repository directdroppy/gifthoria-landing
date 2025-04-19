
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
  },
  assetPrefix: '',
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
