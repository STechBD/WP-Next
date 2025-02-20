import { JSX } from 'react'
import type { Metadata } from 'next'
import Content from '@/app/[slug]/content'
import { Post } from '@/data/type'
import Categories from '@/component/categories'
import Author from '@/component/author'
import RecentPosts from '@/component/recentPosts'

/**
 * Metadata object to change the title.
 *
 * @param title
 * @return { JSX.Element }
 * @since 1.0.0
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = params
	const data = await fetch(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug).then((res: Response) => res.json())
	return { title: data[0].title.rendered }
}

/**
 * Page method to show the article content.
 * @param params
 * @constructor
 */
export default async function Page({ params }: { params: { slug: string } }): Promise<JSX.Element> {
	const slug: string = params.slug
	const data: Post = (await (await fetch(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug)).json())[0]
	const author = data.author

	return (
		<main className="container mx-auto max-w-screen-xl px-4 md:px-8 py-6 overflow-hidden">
			{/* Grid Layout */ }
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{/* Left Sidebar */ }
				<div className="hidden md:block md:col-span-3">
					<Author authorId={ author }/>
				</div>

				{/* Main Content */ }
				<div className="md:col-span-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
					<Content slug={ params.slug }/>
				</div>

				{/* Right Sidebar */ }
				<div className="hidden md:block md:col-span-3 space-y-6">
					<RecentPosts/>
					<Categories/>
				</div>
			</div>
		</main>
	)
}
