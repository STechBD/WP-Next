import { JSX } from 'react'
import type { Metadata } from 'next'
import Article from '@/component/article'
import { getPostList } from '@/function/data'


/**
 * Metadata object to change the title.
 *
 * @param title { string } - The title of the page.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = params
	return { title: 'Category: ' + (await getPostList('category', slug))[1] }
}


/**
 * Page component to show the category content.
 *
 * @param params { slug: string } - The slug of the category.
 * @since 1.0.0
 */
export default async function Page({ params }: { params: { slug: string } }): Promise<JSX.Element> {
	const slug: string = params.slug

	return (<>
		<Article page={ 1 } type="category" data={ await getPostList('category', slug) }/>
	</>)
}
