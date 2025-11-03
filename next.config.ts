import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://ecommerce.routemisr.com/**/**')

    ]
  }
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
let myVar: any; // استخدم any مؤقتًا

export default nextConfig;

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'ecommerce.routemisr.com',
//         pathname: '/**/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
