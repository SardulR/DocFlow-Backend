/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'pdf-parse': 'commonjs pdf-parse',
      });
    }
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      stream: false,
      crypto: false,
    };

    // Ignore the problematic test files
    config.plugins.push(
      new config.constructor.IgnorePlugin({
        resourceRegExp: /^\.\/test\/data\/.*\.pdf$/,
        contextRegExp: /pdf-parse/,
      })
    );

    return config;
  },
  
  // Add this to prevent static optimization issues
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse', 'sharp', 'pdf2pic'],
  },
};

export default nextConfig;