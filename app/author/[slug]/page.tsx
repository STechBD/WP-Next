import { JSX } from 'react'
import type { Metadata } from 'next'
import Article from '@/component/article'
import { getPostList } from '@/function/data'


/**
 * Metadata object to change the title.
 *
 * @param title { string } Title of the page.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const slug: string = (await params).slug
	return { title: 'Author: ' + (await getPostList('author', slug))[1] }
}


/**
 * Page component to show the article content.
 *
 * @param params { slug: string } Slug of the author.
 * @since 1.0.0
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
	const slug: string = (await params).slug

	return (
		<Article page={ 1 } type="author" data={ await getPostList('author', slug) }/>
	)
}
