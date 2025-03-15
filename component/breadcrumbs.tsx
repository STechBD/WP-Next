import { JSX } from 'react'
import Link from 'next/link'
import { Category } from '@/data/type'


/**
 * Breadcrumb Component.
 * Dynamically generates breadcrumbs from categories and post title.
 *
 * @param { string } title - Post title
 * @param { Category[] } categories - Post categories
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Breadcrumbs({ title, categories }: {
	title: string
	categories: Category[]
}): JSX.Element {
	return (
		<nav className="px-4 md:px-0 text-gray-600 dark:text-gray-400 text-sm mb-4">
			<Link href="/" className="hover:text-gray-900 dark:hover:text-white">
				Home
			</Link>
			<span className="mx-2">/</span>

			{ categories.length > 0 && (
				<>
					{ categories.map((category: Category, index: number): JSX.Element => (
						<span key={ category.id }>
							<Link
								href={ `/category/${ category.slug }` }
								className="hover:text-gray-900 dark:hover:text-white"
							>
								{ category.name }
							</Link>
							{ index < categories.length - 1 && <span className="mx-2">/</span> }
						</span>
					)) }
					<span className="mx-2">/</span>
				</>
			) }

			<span className="text-gray-800 dark:text-gray-300">
				{ title }
			</span>
		</nav>
	)
}
