/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "X-Robots-Tag",
              value: "index, follow",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=()",
            },
          ],
        },
        {
          source: "/sitemap.xml",
          headers: [
            { key: "Content-Type", value: "application/xml" },
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
        {
          source: "/sitemap-0.xml",
          headers: [
            { key: "Content-Type", value: "application/xml" },
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
        {
          source: "/robots.txt",
          headers: [
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
        {
          source: "/llms.txt",
          headers: [
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  