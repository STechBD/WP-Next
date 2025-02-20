import Link from 'next/link'

/**
 * Breadcrumb Component
 * Dynamically generates breadcrumbs from categories and post title.
 *
 * @param {string} title - Post title
 * @param {Array<{ id: number; name: string }>} categories - Post categories
 * @return {JSX.Element}
 * @since 1.0.0
 */
export default function Breadcrumbs({ title, categories }: {
	title: string;
	categories: { id: number; name: string }[]
}) {
	return (
		<nav className="text-gray-600 dark:text-gray-400 text-sm mb-4">
			<Link href="/public" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
			<span className="mx-2">/</span>

			{ categories.length > 0 && (
				<>
					{ categories.map((category, index) => (
						<span key={ category.id }>
							<Link href={ `/category/${ category.id }` }
							      className="hover:text-gray-900 dark:hover:text-white">
								{ category.name }
							</Link>
							{ index < categories.length - 1 && <span className="mx-2">/</span> }
						</span>
					)) }
					<span className="mx-2">/</span>
				</>
			) }

			<span className="text-gray-800 dark:text-gray-300">{ title }</span>
		</nav>
	)
}
