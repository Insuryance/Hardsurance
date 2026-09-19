import type { MetadataRoute } from 'next';

import { articles, useCases } from '@/lib/content';

const baseUrl = 'https://www.hardsurance.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/product',
    '/demo',
    '/company',
    '/knowledge',
    '/insights',
  ];

  const staticPages = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const useCasePages = Object.keys(useCases).map((slug) => ({
    url: `${baseUrl}/use-cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articlePages = Object.keys(articles).map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...useCasePages,
    ...articlePages,
  ];
}
