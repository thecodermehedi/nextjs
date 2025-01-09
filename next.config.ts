import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 /* config options here */
 images: {
  // domains: ['nextjs.org'],
  remotePatterns: [
   {
    protocol: 'https',
    hostname: '**',
    // port: '',
    // pathname: '/account123/**',
    // search: '',
   },
  ],
 },

};

export default nextConfig;
