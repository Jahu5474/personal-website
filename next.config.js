/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};
