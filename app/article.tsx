import Link from 'next/link'
import FeaturedImage from "@/app/featuredImage"


/**
 * Article method to show all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Article( { post }: any ): JSX.Element {
	const parser: DOMParser = new DOMParser();
	const htmlDoc: Document = parser.parseFromString(post.excerpt.rendered, 'text/html');
	let excerpt: string = htmlDoc.body.textContent || '';

	let words: string[] = excerpt.split(' ');
	excerpt = words.slice(0, 10).join(' ') + ' .....';

	return (
		<div key={ post.id }
		     className="rounded-lg border border-transparent border-gray-200 px-5 py-4 m-1 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
			<FeaturedImage id={ post.featured_media }/>
			<h2 className="text-2xl font-bold text-gray-800 dark:text-white">{ post.title.rendered }</h2>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{ excerpt }</p>
			<Link href={ `/${ post.slug }` } className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
				Read more
			</Link>
		</div>
	);
}