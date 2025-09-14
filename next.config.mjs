/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      // Add all your heavy packages as externals
      config.externals.push({
        'pdf-parse': 'commonjs pdf-parse',
        'sharp': 'commonjs sharp',
        'pdf2pic': 'commonjs pdf2pic',
        'pdf-lib': 'commonjs pdf-lib',
        'xlsx': 'commonjs xlsx',
        'exceljs': 'commonjs exceljs',
        'mammoth': 'commonjs mammoth',
        'jszip': 'commonjs jszip',
        'jspdf': 'commonjs jspdf',
        'docx': 'commonjs docx',
      });
    }
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      stream: false,
      crypto: false,
      canvas: false,
      encoding: false,
    };

    // Ignore problematic test files and other unwanted files
    config.plugins.push(
      new config.constructor.IgnorePlugin({
        resourceRegExp: /^\.\/test\/data\/.*\.pdf$/,
        contextRegExp: /pdf-parse/,
      }),
      new config.constructor.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    );

    // Optimize for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
      };
    }

    return config;
  },
  
  // Server Components External Packages
  experimental: {
    serverComponentsExternalPackages: [
      'pdf-parse', 
      'sharp', 
      'pdf2pic', 
      'pdf-lib',
      '@pdf-lib/fontkit',
      'xlsx', 
      'exceljs', 
      'mammoth',
      'jszip',
      'jspdf',
      'docx',
      'file-type',
      'pdfjs-dist'
    ],
  },

  // Production optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  // API route configurations for file uploads
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
    responseLimit: '100mb',
  },

  // Image optimization (if you're using Next.js Image component)
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for security and file handling
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval';",
          },
        ],
      },
    ];
  },

  // Output configuration for different deployment platforms
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,

  // Environment-specific configurations
  env: {
    MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || '52428800', // 50MB default
    NODE_ENV: process.env.NODE_ENV || 'development',
  },

  // Logging for production debugging
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },

  // TypeScript configuration (if you're using TypeScript)
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;