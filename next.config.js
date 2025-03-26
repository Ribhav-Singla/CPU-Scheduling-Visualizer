/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/:path*",  // Apply to all paths
          headers: [
            {
              key: "X-Robots-Tag",
              value: "index, follow",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  