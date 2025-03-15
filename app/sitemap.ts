import type { MetadataRoute } from 'next'


/**
 * Generate the sitemap for the site.
 *
 * @return { MetadataRoute.Sitemap } The sitemap for the site.
 * @since 1.0.0
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: (process.env.SITE || 'https://wp-next.stechbd.net') + '/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	]
}
