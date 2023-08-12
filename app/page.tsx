import type { Metadata } from 'next'
import Content from '@/app/content'
import Hero from '@/app/hero'


/**
 * Metadata to change the title.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export const metadata: Metadata = {
	title: 'Welcome',
	description: '...',
};

/**
 * Text method to print text.
 * @param text
 * @constructor
 */
function Text({ text }: any): JSX.Element {
	return (<div className="container mx-auto p-4">
		{ text }
	</div>)
}

/**
 * Page method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Page(): JSX.Element {
	return (<>
		<Hero/>
		<Content/>
	</>);
}
