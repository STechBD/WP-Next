'use client'

import { useEffect, useState } from 'react'
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Post from '@/app/storage/post'


/**
 * Header method to show the sticky header.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	const path: string | null = usePathname()
	const [ isMenuOpen, setIsMenuOpen ] = useState(false)
	const [ post, setPost ] = useState([])

	useEffect(() => {
		Post().then(r => setPost(r))
		console.log('Value of post: ' + post)
	}, []);

	interface MenuItem {
		name: string,
		link: string,
	}

	const menuItems: MenuItem[] = [
		{ name: 'Home', link: '/', },
		{ name: 'Blog', link: '/blog', },
		{ name: 'About', link: '/about', },
		{ name: 'Log Out', link: '/logout', },
	]

	return (
		<Navbar onMenuOpenChange={ setIsMenuOpen }>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={ isMenuOpen ? 'Close menu' : 'Open menu' }
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image src="./WordPress-Next-Logo-Light.svg" alt="WordPress Next" width={ 32 } height={ 32 }/>
					<p className="ml-2 font-bold text-inherit">WordPress Next</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive={ path === '/' }>
					<Link
						href="/"
						className={ path === '/' ? 'text-[#3083F0] font-bold' : '' }
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive={ path === '/test' }>
					<Link
						href="/test"
						className={ path === '/test' ? 'text-[#3083F0] font-bold' : '' }
					>
						Test
					</Link>
				</NavbarItem>
				<NavbarItem isActive={ post.find((item) => item.slug === path) }>
					<Link
						href="/blog"
						className={ post.find((item) => item.slug === path) ? 'text-[#3083F0] font-bold' : '' }
					>
						Blog
					</Link>
				</NavbarItem>
				<NavbarItem isActive={ path === '/int' }>
					<Link href="#" color="foreground">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={ Link } color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{ menuItems.map((item: MenuItem, index: number) => (
					<NavbarMenuItem key={ `${ item.name }-${ index }` }>
						<Link
							className={ 'w-full' + (path === item.link ? ' text-[#3083F0] font-bold' : index === menuItems.length - 1 ? ' text-red-800' : '') }
							href={ item.link }
						>
							{ item.name }
						</Link>
					</NavbarMenuItem>
				)) }
			</NavbarMenu>
		</Navbar>
	)
}
