export default function robots() {
    return {
      rules: [
        {
          userAgent: 'Googlebot',
          allow: ['/'],
          disallow: ['/private/'],
        },
        {
          userAgent: ['Applebot', 'Bingbot'],
          allow: ['/'],
          disallow: ['/private/'],
        },
      ],
      sitemap: 'https://onemapafrica.org/sitemap.xml',
    }
  }