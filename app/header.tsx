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
import Cookie from 'js-cookie'
import useSWR from 'swr'


/**
 * Fetcher method to fetch data using SWR technology.
 * @param url
 * @return { Promise<any> }
 * @since 1.0.0
 */
const fetcher = async (url: RequestInfo | URL): Promise<any> => {
	try {
		const response: Response = await fetch(url)
		return await response.json()
	} catch (error) {
		throw new Error('Error fetching data')
	}
}

/**
 * Header method to show the sticky header.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	const API: string | undefined = process.env.API
	const path: string | null = usePathname()
	const [ isMenuOpen, setIsMenuOpen ] = useState(false)
	const [ post, setPost ] = useState([])

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

	const {
		data,
		error,
		isLoading
	} = useSWR(API + '/wp-json/wp/v2/posts?_fields=id,title,author,slug,date,categories&per_page=100', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	})

	useEffect(() => {
		if (data) {
			const postList = data.map((post: {
				id: any,
				title: { rendered: any },
				slug: any,
				author: any,
				date: any,
				categories: any[]
			}) => ({
				id: post.id,
				title: post.title.rendered,
				slug: post.slug,
				author: post.author,
				date: post.date,
				categories: post.categories.map((category) => ({ id: category })),
			}))

			const json: string = JSON.stringify(postList)

			console.log('Cookie data to be set: ' + json)

			Cookie.set('WP-Next-Post', json, {
				expires: new Date(Date.now() + 60 * 60 * 1000), // 60 minutes
				path: '/',
			})

			console.log('Cookie set: ' + Cookie.get('WP-Next-Post'))

			setPost(postList)
		}
	}, [ data ]); // Only run this effect when `data` changes

	return (
		<Navbar onMenuOpenChange={ setIsMenuOpen }>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={ isMenuOpen ? 'Close menu' : 'Open menu' }
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/">
						<Image src="./WordPress-Next-Logo-Light.svg" alt="WordPress Next" width={ 32 } height={ 32 }/>
					</Link>
					<Link href="/">
						<p className="ml-2 font-bold text-inherit">WordPress Next</p>
					</Link>
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
				<NavbarItem
					isActive={ post && !!post.find((item: { slug: string | null }) => ('/' + item.slug) === path) }>
					<Link
						href="/blog"
						className={ post && !!post.find((item: {
							slug: string | null
						}) => ('/' + item.slug) === path) ? 'text-[#3083F0] font-bold' : '' }
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
