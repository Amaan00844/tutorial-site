/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable anonymous telemetry collection
  experimental: {
    // Helps resolve SWC lockfile warnings on CI
  },
};

export default nextConfig;
