import Link from 'next/link';

/**
 * Fetch and display dynamic categories from WP API.
 * @return { Promise<JSX.Element>}
 * @since 1.0.0
 */
export default async function Categories(): Promise<JSX.Element> {
	const response = await fetch(`${ process.env.API }/wp-json/wp/v2/categories`, { cache: 'no-store' })
	const categories = await response.json()

	return (
		<aside className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
			<h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Categories</h2>
			<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
				{ categories.length > 0 ? (
					categories.map((category: { id: number; name: string; slug: string }) => (
						<li key={ category.id }>
							<Link href={ '/category/' + category.slug }
							      className="hover:text-gray-900 dark:hover:text-white"
							>
								{ category.name }
							</Link>
						</li>
					))
				) : (
					<p>No categories found.</p>
				) }
			</ul>
		</aside>
	)
}
