'use client'

import useSWR from 'swr'
import Image from 'next/image'
import Article from '@/app/article'
import { Progress } from '@nextui-org/react'


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
 * Content method to load all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Content(): JSX.Element {
	const date: Date = new Date();
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	const seconds: number = date.getSeconds();

	const { data, error, isLoading } = useSWR('http://localhost:3000/data.json'/*'https://blog.shikkhaweb.com/wp-json/wp/v2/posts/'*/, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	if (error) {
		return (<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Error</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Error: { error }</p>
			</div>
		</main>)
	}

	if (isLoading) {
		return (
			<main className="flex min-h-screen flex-col justify-between p-24">
				<div className="container mx-auto p-4">
					<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Loading</h1>
					<div className="flex h-full justify-center">
						<Progress
							size="sm"
							isIndeterminate
							aria-label="Loading ..."
							className="w-full mt-4"
						/>
					</div>
				</div>
			</main>
		)
	}

	return (
		<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white"><strong>Explore</strong>
				</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Time: { hours + ':' + minutes + ':' + seconds }</p>
			</div>
			<div
				className="mb-32 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				{ data.map((post: any) => (
					<Article post={ post }/>
				)) }
			</div>
		</main>
	)
}
