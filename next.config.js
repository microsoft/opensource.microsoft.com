module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
