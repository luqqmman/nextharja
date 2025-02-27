/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/public',
            permanent: true, // Gunakan true untuk redirect 308, false untuk redirect 307
          },
        ]
    },
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
              port: '',
              pathname: '**',
          },
      ],
  },
};



export default nextConfig;
