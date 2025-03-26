/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cpu-scheduling-visualizer-ribhav.vercel.app/', 
  generateRobotsTxt: true,
  changefreq: 'never',
  priority: 0.7,
  sitemapSize: 5000, 
  exclude: [],
  robotsTxtOptions: {
      policies: [
          { userAgent: '*', allow: '/' }
      ],
  },
};
