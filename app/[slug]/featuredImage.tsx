import Image from 'next/image'
import useSWR from "swr";

/**
 * Fetcher method to fetch data using SWR technology.
 * @param url
 * @return { Promise<any> }
 * @since 1.0.0
 */
const fetcher = async (url: RequestInfo | URL): Promise<any> => {
	try {
		const response: Response = await fetch(url);
		return await response.json();
	} catch (error) {
		throw new Error('Error fetching data');
	}
};

/**
 * FeaturedImage method to show featured image.
 * @param id
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function FeaturedImage({ id }: any): JSX.Element {
	const { data, error, isLoading } = useSWR('https://blog.shikkhaweb.com/wp-json/wp/v2/media/' + id + '/', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	if (error) {
		return (<div className="flex min-h-screen flex-col justify-between p-24">Error: { error }</div>)
	}

	if (isLoading) {
		return (<div>Image loading...</div>)
	}

	return (
		<Image
			key={ data.id }
			src={ data.media_details.sizes.large.source_url }
			alt={ data.title.rendered }
			width={ data.media_details.sizes.full.width }
			height={ data.media_details.sizes.full.height }
			loading={ "lazy" }
		/>);
}