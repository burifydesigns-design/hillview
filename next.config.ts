/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/our-team/:path*", destination: "/team/:path*", permanent: true },
      { source: "/the-clinic", destination: "/clinic", permanent: true },
    ];
  },
};

export default nextConfig;
