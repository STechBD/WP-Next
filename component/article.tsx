import { JSX } from 'react'
import Link from 'next/link'
import ArticleList from '@/component/articleList'


/**
 * Content method to load articles based on category, author, tag, or recent posts.
 * Supports pagination and limit per page.
 *
 * @param { string } data - The filter value (category slug, author ID, or tag ID).
 * @param { string } type - The filter type: "category", "author", or "tag".
 * @param { number } page - The current page number.
 * @return { Promise<JSX.Element> }
 * @since 1.0.0
 */
export default async function Article({ data, type, page }: {
	data: string,
	type?: 'category' | 'author' | 'tag',
	page?: number,
}): Promise<JSX.Element> {

	if (!data || data[0].length === 0) {
		return (
			<main className="flex min-h-screen flex-col justify-between p-24">
				<div className="container mx-auto p-4">
					<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">
						No Posts Found
					</h1>
					<p className="text-center text-gray-500 dark:text-gray-400">
						No articles available for this selection.
					</p>
				</div>
			</main>
		)
	}

	// Generate dynamic heading based on type
	let title: string = 'Latest Posts'
	if (type === 'category') title = `Category: ${ data[1] }`
	else if (type === 'author') title = `Author: ${ data[1] }`
	else if (type === 'tag') title = `Tag: ${ data[1] }`

	return (
		<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
					<strong>
						{ title }
					</strong>
				</h1>
			</div>
			<div className="mb-32 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				<ArticleList data={ data[0] }/>
			</div>

			{/* Pagination Controls */ }
			<div className="flex justify-center mt-8 space-x-4">
				{ page && page > 1 && (<>
					<Link
						href={ `?type=${ type ?? '' }&slug=&page=${ page - 1 }` }
						className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
					>
						Previous
					</Link>
					<Link
						href={ `?type=${ type ?? '' }&slug=&page=${ page + 1 }` }
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Next
					</Link>
				</>) }
			</div>
		</main>
	)
}
