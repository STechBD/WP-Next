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
 * @param title { string } Title of the page.
 * @return { Metadata } Metadata object.
 * @since 1.0.0
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const slug: string = (await params).slug
	const data = await fetch(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug).then((res: Response) => res.json())
	return { title: data[0].title.rendered }
}


/**
 * Page component to show the article content.
 *
 * @param params { Promise<{ slug: string }> } Slug of the post.
 * @return { JSX.Element } The Page component.
 * @since 1.0.0
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
	const slug: string = (await params).slug
	const data: Post = (await (await fetch(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug)).json())[0]
	const author: number = data.author

	return (
		<main className="container mx-auto px-4 md:px-8 py-6 overflow-hidden">
			{/* Grid Layout */ }
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{/* Left Sidebar */ }
				<div className="order-2 md:order-1 md:col-span-3">
					<Author authorId={ author }/>
				</div>

				{/* Main Content */ }
				<div className="md:order-2 md:col-span-6 bg-white dark:bg-gray-900 py-6 lg:p-6 rounded-lg shadow-lg">
					<Content slug={ slug }/>
				</div>

				{/* Right Sidebar */ }
				<div className="order-3 md:col-span-3 space-y-6">
					<RecentPosts/>
					<Categories/>
				</div>
			</div>
		</main>
	)
}
