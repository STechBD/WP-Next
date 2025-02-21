import { JSX } from 'react'
import he from 'he'
import FeaturedImage from '@/component/featuredImage'
import Breadcrumbs from '@/component/breadcrumbs'


/**
 * Fetch post data from WordPress API.
 * @param {string} slug
 * @return {Promise<any>}
 * @since 1.0.0
 */
const fetchPost = async (slug: string): Promise<any> => {
	try {
		const response = await fetch(`${ process.env.API }/wp-json/wp/v2/posts?slug=${ slug }&_embed`)
		if (!response.ok) throw new Error('Failed to fetch data')
		const data = await response.json()
		if (!data || data.length === 0) throw new Error('Post not found')
		return data[0]
	} catch (error) {
		console.error('Error fetching post:', error)
		throw error
	}
}

/**
 * Content component with sidebar layout.
 * @param { slug: string }
 * @return { Promise<JSX.Element> }
 * @since 1.0.0
 */
export default async function Content({ slug }: { slug: string }): Promise<JSX.Element> {
	let post
	try {
		post = await fetchPost(slug)
	} catch (error) {
		return (
			<main className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-red-600 dark:text-red-400">
						Error
					</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Could not load content.
					</p>
				</div>
			</main>
		)
	}

	// Extract categories dynamically
	const categories = post._embedded?.['wp:term']?.[0] || []

	return (
		<article className="w-full">
			{/* Breadcrumbs */ }
			<Breadcrumbs title={ he.decode(post.title.rendered) } categories={ categories }/>

			{/* Featured Image */ }
			<div className="w-full flex justify-center mb-4">
				<FeaturedImage id={ post.featured_media }/>
			</div>

			{/* Title */ }
			<h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
				{ he.decode(post.title.rendered) }
			</h1>

			{/* Content */ }
			<div className="prose dark:prose-invert mx-auto max-w-full break-words overflow-hidden">
				<div dangerouslySetInnerHTML={ { __html: post.content.rendered } } className="post-content"/>
			</div>
		</article>
	)
}
