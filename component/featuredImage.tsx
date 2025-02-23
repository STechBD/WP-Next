import { JSX } from 'react'
import Image from 'next/image'
import { Media } from '@/data/type'


/**
 * FeaturedImage method to show featured image.
 * @param id
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default async function FeaturedImage({ id }: any): Promise<JSX.Element> {
	const api: string = (process.env.API ?? '') + '/wp-json/wp/v2/media/' + id + '/'

	try {
		const data: Media = await fetch(api).then((res) => res.json())

		if (!data) {
			return (
				<Image
					key="0"
					src="/image/WP-Next.webp"
					alt="Image not found"
					width={ 1200 }
					height={ 628 }
					loading="lazy"
					className="rounded-tl-xl rounded-tr-xl"
				/>
			)
		}

		return (
			<Image
				key={ data.id }
				src={ data.media_details?.sizes?.full.source_url ?? '/image/WP-Next.webp' }
				alt={ data.title?.rendered ?? 'Featured Image' }
				width={ data.media_details?.sizes?.full.width ?? 1200 }
				height={ data.media_details?.sizes?.full.height ?? 628 }
				loading="lazy"
				className="rounded-tl-xl rounded-tr-xl"
			/>
		)
	} catch (error) {
		return (
			<Image
				key="0"
				src="/image/WP-Next.webp"
				alt="Image not found"
				width={ 1200 }
				height={ 628 }
				loading="lazy"
				className="rounded-tl-xl rounded-tr-xl"
			/>
		)
	}
}
