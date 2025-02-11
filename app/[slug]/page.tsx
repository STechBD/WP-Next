import { JSX } from 'react'
import type { Metadata } from 'next'
import Content from '@/app/[slug]/content'


/**
 * Fetch data from WordPress API.
 *
 * @return { Promise<{ props: { post: any } }> }
 * @since 1.0.0
 * @param slug
 */
async function fetcher(slug: string): Promise<{ data: object }> {
	const res = await fetch('https://blog.shikkhaweb.com/wp-json/wp/v2/posts?slug=' + slug)
	const data = await res.json()
	return data[0]
}

/**
 * Metadata object to change the title.
 *
 * @param title
 * @return { JSX.Element }
 * @since 1.0.0
 */
export async function generateMetadata({ params }: {
	params: {
		slug: string
	}
}): Promise<Metadata> {
	const { slug } = params

	const data = await fetch(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug).then((res: Response) => res.json())

	return {
		title: data[0].title.rendered,
	}
}

/**
 * Page method to show the article content.
 * @param params
 * @constructor
 */
export default async function Page({ params }: {
	params: {
		slug: string
	}
}): Promise<JSX.Element> {
	const data = fetcher(params.slug)

	return <>
		<main>
			<div className="w-60">
				{ data.title }
			</div>
			<div className="w-full grid grid-cols-5">
				<div>

				</div>
				<div className="col-span-3">
					<Content slug={ params.slug }/>
				</div>
				<div>

				</div>
			</div>

		</main>
	</>
}
