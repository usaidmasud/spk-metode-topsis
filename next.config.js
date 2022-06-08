/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://usaid-app.herokuapp.com/api",
  },
};

module.exports = nextConfig;
