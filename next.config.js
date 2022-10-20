/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: process.env.NODE_ENV == "development" ? null : "/PartyChallenges",
  publicRuntimeConfig: { basePath: process.env.NODE_ENV == "development" ? null : "/PartyChallenges" }
}

module.exports = nextConfig
