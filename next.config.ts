import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xwipmlfvxtqnizhwoppi.supabase.co',
        pathname: '/storage/v1/object/public/logo/**',
      },
    ],
  },
};

export default nextConfig;
