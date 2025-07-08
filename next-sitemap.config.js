/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cpu-scheduling-visualizer-ribhav.vercel.app/', 
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.8,
  sitemapSize: 5000, 
  exclude: ['/api/*', '/_next/*'],
  additionalPaths: async (config) => [
    {
      loc: '/algorithms',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/algorithms',
      },
      {
        userAgent: '*',
        disallow: ['/api/private', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://cpu-scheduling-visualizer-ribhav.vercel.app/sitemap.xml',
    ],
  },
}
