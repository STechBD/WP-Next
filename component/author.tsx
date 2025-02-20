import { JSX } from 'react'
import Image from 'next/image'


/**
 * Fetch and display author details from WP API.
 * @param { number } authorId - The author ID from the post.
 * @return { Promise<JSX.Element>}
 * @since 1.0.0
 */
export default async function Author({ authorId }: { authorId: number }): Promise<JSX.Element> {
	const response = await fetch(`${ process.env.API }/wp-json/wp/v2/users/${ authorId }`, { cache: 'no-store' })
	const author = await response.json()

	return (
		<aside className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
			<h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Author</h2>
			<div className="flex items-center space-x-3">
				<Image
					src={ author.avatar_urls?.['96'] || '/image/WP-Next-Logo-Light.svg' }
					alt={ author.name }
					width={ 48 }
					height={ 48 }
					className="rounded-full w-12 h-12"
				/>
				<div>
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						{ author.name }
					</p>
					<p className="text-xs text-gray-600 dark:text-gray-400">
						{ author.description || 'No bio available' }
					</p>
				</div>
			</div>
		</aside>
	)
}
