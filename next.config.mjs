// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns:[
//             {
//                 protocol: 'https',
//                 hostname: 'images.tmdb.org',
//                 pathname: '/**',
//             },
//         ]
//     },
// };

// export default nextConfig;

// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['image.tmdb.org'],
    },
  };

  export default nextConfig;
