import type { MetadataRoute } from 'next'


/**
 * Generate the robots.txt file for the site.
 *
 * @return { MetadataRoute.Robots } The robots.txt file for the site.
 * @since 1.0.0
 */
export default function robots(): MetadataRoute.Robots {
	// Access the environment variables
	const allowPath = process.env.ROBOTS_ALLOW || '/'
	const disallowPaths = (process.env.ROBOTS_DISALLOW || '').split(',')

	// Construct the rules dynamically
	const rules = [
		{
			userAgent: '*',
			allow: allowPath,
			disallow: disallowPaths,
		},
	]

	// Access the site URL from the environment variable
	const siteUrl = process.env.SITE || 'https://wp-next.stechbd.net'

	return {
		rules,
		sitemap: `${ siteUrl }/sitemap.xml`,
	}
}
