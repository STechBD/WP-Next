import { JSX } from 'react'
import type { Metadata } from 'next'
import Article from '@/component/article'
import Hero from '@/app/hero'
import { getPostList } from '@/function/data'


/**
 * Metadata to change the title.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export const metadata: Metadata = {
	title: 'Welcome',
	description: '...',
}

/**
 * Page method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default async function Page(): Promise<JSX.Element> {
	return (<>
		<Hero/>
		<Article data={ await getPostList() }/>
	</>)
}
