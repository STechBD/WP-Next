'use client'

import Link from 'next/link'
import Image from 'next/image'
import { State } from '@/data/type'
import Mode from '@/component/mode'
import { Dispatch } from 'redux'
import { JSX, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import config from '@/wp-next.config'


/**
 * Header component.
 *
 * @return { JSX.Element } The header component.
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	const dispatch: Dispatch = useDispatch()
	const lightMode: boolean = useSelector((state: State): boolean => state.lightMode)
	const [ menu, setMenu ] = useState(true)

	const toggleMenu = (): void => {
		setMenu(!menu)
	}

	return (
		<header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center gap-2">
						<Image
							src={ `/image/WP-Next-Logo-${ lightMode ? 'Light' : 'Dark' }.svg` }
							alt="WP-Next Logo"
							width={ 32 }
							height={ 32 }
						/>
						<Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
							{ config.header.title }
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

						<button onClick={ toggleMenu } className="cursor-pointer">
							<span className="sr-only">
								Open main menu
							</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
							     stroke="currentColor" aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round"
								      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
								</path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
