import Image from 'next/image'
import type {Metadata} from 'next'
import Head from 'next/head'
import Link from 'next/link'


export const metadata: Metadata = {
	title: 'Welcome',
	description: '...',
}

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();


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
	const data = fetcher('https://blog.shikkhaweb.com/wp-json/wp/v2/media/' + id);

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
function Articles(): JSX.Element {
	return (<>

	</>);
}

function Text({ text } : any): JSX.Element {
	return (<div className="container mx-auto p-4">
		{ text }
		</div>);
}


export default function Page(): JSX.Element {
	/*const {data, error} = useSWR('https://blog.shikkhaweb.com/wp-json/wp/v2/posts', fetcher);*/
	const data = fetcher('https://blog.shikkhaweb.com/wp-json/wp/v2/posts');

	if (!data) {
		return (<>Loading...</>);
	}

	return (<>
		<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Welcome</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">Time: { hours + ':' + minutes + ':' + seconds }</p>
			</div>
			<div
				className="mb-32 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Docs{' '}
						<span
							className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Learn{' '}
						<span
							className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Templates{' '}
						<span
							className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Explore the Next.js 13 playground.
					</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Deploy{' '}
						<span
							className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>

				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Docs{' '}
						<span
							className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				{/*{ data.map((post: any) => (
					<div key={ post.id }
					   href={ `/${post.slug}` }
					   className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
						{ post.featured_media && ( <FeaturedImage id={ post.featured_media }/> ) }
						<h2 className="text-2xl font-bold text-gray-800 dark:text-white">{ post.title.rendered }</h2>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.excerpt.rendered }}</p>
						   dangerouslySetInnerHTML = {{ __html: post.excerpt.rendered }}
						<Link href={ `/${post.slug}` } className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
							Read more
						</Link>
					</div>
				)) }*/}
			</div>

			{ if (!data) { <Text text="False"/> } else { <Text text="True"/> }
			<div className="flex flex-col items-center justify-center w-full max-w-2xl px-6 py-16 mx-auto space-y-6">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Articles: { data.length }</h2>
			</div>
		</main>
	</>);
}