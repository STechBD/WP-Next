/**
 * Project: WordPress-Next
 * Description: WordPress-Next is a simple and lightweight frontend framework for WordPress based on Next.js.
 * Version: 1.0.0
 * Version Code: 1
 * Since: 1.0.0
 * Author: Md. Ashraful Alam Shemul
 * Email: ceo@stechbd.net
 * Website: https://www.stechbd.net/project/WP-Next/
 * Developer: S Technologies
 * Homepage: https://www.stechbd.net
 * Contact: product@stechbd.net
 * Created: April 17, 2023
 * Updated: August 6, 2023
 */

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Inter} from 'next/font/google'
import useSWR from 'swr';

const inter = Inter({subsets: ['latin']});


/**
 * Fetcher method to fetch data using SWR technology.
 * @param url
 * @return {Promise<any>}
 * @since 1.0.0
 */
const fetcher = async (url: RequestInfo | URL): Promise<any> => {
	const response = await fetch(url);
	return await response.json();
};

/**
 * FeaturedImage method to show featured image.
 * @param id
 * @return {JSX.Element}
 * @since 1.0.0
 */
function FeaturedImage({ id }: any): JSX.Element {
	const {data, error} = useSWR('https://blog.shikkhaweb.com/wp-json/wp/v2/media/' + id, fetcher);

	if (!data) {
		return <div>Image loading...</div>;
	} else {
		return <Image src={ data.source_url } alt={ data.title.rendered } height={ 100 } width={ 100 }/>;
	}
}

/**
 * Articles method to show all articles.
 * @return {JSX.Element}
 * @since 1.0.0
 */
export default function Articles(): JSX.Element {
	const {data, error} = useSWR('https://blog.shikkhaweb.com/wp-json/wp/v2/posts', fetcher);

	if (error) {
		return (<>
			<Head>Error</Head>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Error</h1>
				<div className="container mx-auto p-4">Error details: { error }</div>
			</main>
		</>
		);
	}
	if (!data) {
		return (<>
				<Head>Loading</Head>
				<main className="flex min-h-screen flex-col items-center justify-between p-24">
					<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Loading</h1>
					<div className="container mx-auto p-4">Loading website....</div>
				</main>
			</>
		);
	}
	if (data) console.log(data);

	return (
		<>
			<Head>
				<title>Articles - WP-Next</title>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Articles</h1>
				<div className="container mx-auto p-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{data.map((post: any) => (
							<div key={post.id} className="bg-gray-200 p-4 rounded shadow">
								<div
									className="relative flex flex-col items-center justify-center w-full h-full p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800">
									{ post.featured_media && ( <FeaturedImage id={post.featured_media}/> ) }
									<h2 className="text-2xl font-bold text-gray-800 dark:text-white">{post.title.rendered}</h2>
									<p className="mt-2 text-sm text-gray-600 dark:text-gray-400"
									   dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
									<Link href={`/${post.slug}`} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
										Read more
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	)
}