/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24,
    deviceSizes: [320, 640, 660, 768, 1024, 1600],
  },
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
})

module.exports = withBundleAnalyzer(nextConfig)
