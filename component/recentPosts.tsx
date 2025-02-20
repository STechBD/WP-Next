import { JSX } from 'react'
import { Post } from '@/data/type'
import Link from 'next/link'


/**
 * Fetch and display recent posts from WP API.
 * @return { Promise<JSX.Element>}
 * @since 1.0.0
 */
export default async function RecentPosts(): Promise<JSX.Element> {
	const response = await fetch(`${ process.env.API }/wp-json/wp/v2/posts?per_page=5`, { cache: 'no-store' })
	const posts = await response.json()

	return (
		<aside className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
			<h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Recent Posts</h2>
			<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
				{ posts.length > 0 ? (
					posts.map((post: Post): JSX.Element => (
						<li key={ post.id }>
							<Link href={ '/public' + post.slug } className="hover:text-gray-900 dark:hover:text-white">
								{ post.title.rendered }
							</Link>
						</li>
					))
				) : (
					<p>
						No recent posts found.
					</p>
				) }
			</ul>
		</aside>
	)
}
