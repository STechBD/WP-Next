import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'


/**
 * Header component.
 *
 * @return { JSX.Element } The header component.
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	return (
		<header className="bg-white dark:bg-gray-800 shadow">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<Image src="/image/WP-Next-Light.svg" alt="WP-Next" width={ 48 } height={ 48 }/>
						<Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
							WP-Next
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Link href="/about" className="text-gray-800 dark:text-white">
							About
						</Link>
						<Link href="/contact" className="text-gray-800 dark:text-white">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
