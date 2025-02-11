import { JSX } from 'react'
import striptags from 'striptags'
import Link from 'next/link'
import FeaturedImage from '@/app/_component/featuredImage'


/**
 * Article method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Article({ post }: any): JSX.Element {
	const content: string = striptags(post.excerpt.rendered)
	const words: string[] = content.split(' ')
	const excerpt: string = words.slice(0, 10).join(' ') + ' .....'

	return (<>
		<div
			key={ post.id }
			className="bg-white rounded-xl border border-gray-200 m-1 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		>
			<FeaturedImage className="rounded-tl-xl rounded-tr-xl" id={ post.featured_media }/>
			<div className="px-5 py-4">
				<h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
					{ post.title.rendered }
				</h2>
				<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					{ excerpt }
				</p>
				<Link href={ `/${ post.slug }` } className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
					Read more
				</Link>
			</div>
		</div>
	</>)
}
