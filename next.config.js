/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === 'production') {
  const { default: withSerwistInit } = require("@serwist/next");
  const withSerwist = withSerwistInit({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
  });
  module.exports = withSerwist(nextConfig);
} else {
  module.exports = nextConfig;
}
