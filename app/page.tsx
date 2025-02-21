import type { Metadata } from 'next'
import Article from '@/component/article'
import Hero from '@/app/hero'


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
export default function Page(): JSX.Element {
	return (<>
		<Hero/>
		<Article page={ 1 } perPage={ 10 }/>
	</>)
}
