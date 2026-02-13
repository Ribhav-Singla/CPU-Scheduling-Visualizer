/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cpu-scheduling-visualizer-ribhav.vercel.app', 
  generateRobotsTxt: false, // We have custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000, 
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  generateIndexSitemap: true,
  additionalPaths: async (config) => [
    {
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/algorithms',
      changefreq: 'weekly',
      priority: 0.95,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/about',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/contact',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/privacy-policy',
      changefreq: 'yearly',
      priority: 0.3,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/terms-and-conditions',
      changefreq: 'yearly',
      priority: 0.3,
      lastmod: new Date().toISOString(),
    }
  ],
  transform: async (config, path) => {
    // Set higher priority for main pages
    let priority = 0.7;
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/algorithms') {
      priority = 0.95;
      changefreq = 'weekly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://cpu-scheduling-visualizer-ribhav.vercel.app${path}`,
          hreflang: 'en',
        },
        {
          href: `https://cpu-scheduling-visualizer-ribhav.vercel.app${path}`,
          hreflang: 'x-default',
        },
      ],
    };
  },
}
