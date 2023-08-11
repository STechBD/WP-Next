'use client'

import { useEffect, useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Article from "@/app/article";



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
 * Page method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Content(): JSX.Element {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const [ data, setData ] = useState<any>([]);
	const [ loading, setLoading ] = useState<boolean>(true);
	const [ error, setError ] = useState<string | null>(null);

	useEffect(() => {
		fetcher('https://blog.shikkhaweb.com/wp-json/wp/v2/posts/')
			.then((jsonData) => {
				setData(jsonData);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				console.log(error);
			});
	}, []);

	if (error) {
		return (<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Error</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Error: { error }</p>
			</div>
		</main>);
	}

	if (loading) {
		return (<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Loading</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Data is loading .....</p>
			</div>
		</main>);
	}

	return (<>
		<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Welcome</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Time: { hours + ':' + minutes + ':' + seconds }</p>
			</div>
			<div
				className="mb-32 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				{ data.map((post: any) => (
					<Article post={ post } />
				)) }
			</div>
		</main>
	</>);
};
