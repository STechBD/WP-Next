'use client'

import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '@/data/type'
import Mode from '@/component/mode'


/**
 * Header component.
 *
 * @return { JSX.Element } The header component.
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	const dispatch = useDispatch()
	const lightMode = useSelector((state: State) => state.lightMode)

	return (
		<header className="bg-white dark:bg-gray-800 shadow sticky">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center gap-2">
						<Image
							src={ `/image/WP-Next-Logo-${ lightMode ? 'Light' : 'Dark' }.svg` }
							alt="WP-Next Logo"
							width={ 32 }
							height={ 32 }
						/>
						<Link href="/public" className="text-xl font-bold text-gray-900 dark:text-gray-100">
							WP-Next
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Mode/>
						<Link href="/about" className="text-gray-900 dark:text-gray-100">
							About
						</Link>
						<Link href="/contact" className="text-gray-900 dark:text-gray-100">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
