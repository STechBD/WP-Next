import type { Metadata } from 'next'
import Content from '@/app/[slug]/content'


/**
 * Metadata object to change the title.
 * @param title
 * @return { JSX.Element }
 * @since 1.0.0
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	// read route params
	const slug = params.slug

	// fetch data
	const data = await fetch('https://blog.shikkhaweb.com/wp-json/wp/v2/posts?slug=' + slug).then((res) => res.json())

	return {
		title: data[0].title.rendered,
	}
}

/**
 * Page method to show the article content.
 * @param params
 * @constructor
 */
export default function Page({ params }: { params: { slug: string } }) {

	return (<>
		<main className="grid grid-cols-5">
			<div>

			</div>
			<div className="col-span-3">
				<Content slug={ params.slug }/>
			</div>
			<div>

			</div>
		</main>
	</>)
}
