import { SetStateAction, useEffect, useState} from 'react';
import Image from 'next/image'

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
export default function FeaturedImage({id}: any): JSX.Element {

	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetcher('https://blog.shikkhaweb.com/wp-json/wp/v2/media/' + id + '/')
			.then((jsonData: any) => {
				setData(jsonData);
				setLoading(false);
			})
			.catch((error: { message: SetStateAction<string | null>; }) => {
				setError(error.message);
				console.log(error);
			});
	}, []);

	if (error) {
		return (<div className="flex min-h-screen flex-col justify-between p-24">Error: { error }</div>)
	}

	if (loading) {
		return (<div>Image loading...</div>)
	}

	return <Image src={ data.source_url } alt={ data.title.rendered } height={ 100 } width={ 100 } />
}