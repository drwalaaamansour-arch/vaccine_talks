import { withSerwist } from "@serwist/turbopack";
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vaccinetalk.com' }],
        destination: 'https://www.vaccinetalks.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vaccinetalk.com' }],
        destination: 'https://www.vaccinetalks.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vaccinetalks.com' }],
        destination: 'https://www.vaccinetalks.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withSerwist(nextConfig);
