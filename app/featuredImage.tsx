import { JSX } from 'react'
import Image from 'next/image'


/**
 * FeaturedImage method to show featured image.
 * @param id
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default async function FeaturedImage({ id }: any): Promise<JSX.Element> {
	const api: string = (process.env.API ?? '') + '/wp-json/wp/v2/media/' + id + '/'
	const data = await fetch(api).then((res) => res.json())

	if (!data) {
		return (
			<div className="flex min-h-screen flex-col justify-between p-24">
				Error fetching data.
			</div>
		)
	}

	return (
		<Image
			key={ data.id }
			src={ data.media_details.sizes.medium.source_url }
			alt={ data.title.rendered }
			width={ data.media_details.sizes.full.width }
			height={ data.media_details.sizes.full.height }
			loading="lazy"
			className="rounded-tl-xl rounded-tr-xl"
		/>
	)
}
