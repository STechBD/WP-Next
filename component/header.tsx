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

	return (<>
		<header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-[100]">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center gap-2">
						<Image
							src={ config.header.navbar.logo ? config.header.navbar.logo[lightMode ? 'light' : 'dark'].src : `/image/WP-Next-Logo-${ lightMode ? 'Light' : 'Dark' }.svg` }
							alt={ config.header.navbar.logo ? config.header.navbar.logo[lightMode ? 'light' : 'dark'].alt : 'WP-Next Logo' }
							width={ 32 }
							height={ 32 }
						/>
						<Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
							{ config.header.title ?? 'WP-Next' }
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Mode/>
						{ config.header.navbar.items.map((item, index) => (
							(item.disabled !== 'desktop') &&
							<Link
								key={ index }
								href={ item.link }
								target={ item.link.startsWith('http') ? '_blank' : '_self' }
								className="text-gray-900 dark:text-gray-100"
							>
								{ item.label }
							</Link>
						)) }
					</div>
					<div className="flex md:hidden items-center space-x-4">
						<Mode/>
						<button onClick={ toggleMenu } className="cursor-pointer">
							<span className="sr-only">
								Open main menu
							</span>
							<svg className={ `h-6 w-6 ${ lightMode ? 'text-gray-900' : 'text-gray-100' }` }
							     fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
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
		<div
			className={ `w-full bg-white dark:bg-gray-800 shadow z-[99] fixed transition-all duration-500 ease-out md:hidden ${ menu ? '-top-96' : 'top-16' }` }
		>
			<nav className="bg-white dark:bg-gray-800 shadow">
				<div className="container mx-auto px-4">
					<ul className="flex flex-col gap-4 py-4">
						{ config.header.navbar.items.map((item, index) => (
							(item.disabled !== 'mobile') && <li key={ index }>
								<Link
									href={ item.link }
									target={ item.link.startsWith('http') ? '_blank' : '_self' }
									className="text-gray-900 dark:text-gray-100"
								>
									{ item.label }
								</Link>
							</li>
						)) }
					</ul>
				</div>
			</nav>
		</div>
	</>)
}
