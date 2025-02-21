import { JSX } from 'react'
import he from 'he'
import striptags from 'striptags'
import Link from 'next/link'
import FeaturedImage from '@/component/featuredImage'


/**
 * Article method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function ArticleList({ data }: any): JSX.Element {
	return (
		data.map((post: any, index: number): any => {
			const content: string = striptags(post.excerpt.rendered)
			const words: string[] = content.split(' ')
			const excerpt: string = words.slice(0, 10).join(' ') + ' ..... '

			return (
				<div
					key={ post.id }
					className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 m-1 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				>
					<FeaturedImage className="rounded-tl-xl rounded-tr-xl" id={ post.featured_media }/>
					<div className="px-5 py-4">
						<h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
							{ he.decode(post.title.rendered) }
						</h2>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
							{ excerpt }
							<Link
								href={ `/${ post.slug }` }
								className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
							>
								Read more
							</Link>
						</p>
					</div>
				</div>
			)
		})
	)
}
