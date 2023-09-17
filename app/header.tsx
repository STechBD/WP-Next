'use client'

import { useState } from 'react'
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


/**
 * Header method to show the sticky header.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	const path: string | null = usePathname()
	const [ isMenuOpen, setIsMenuOpen ] = useState(false)

	const menuItems: string[] = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
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
						aria-current={ path === '/' ? 'page' : undefined }
						color={ path === '/' ? undefined : 'foreground' }
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive={ path === '/test' }>
					<Link
						href="/test"
						aria-current={ path === '/test' ? 'page' : undefined }
						color={ path === '/test' ? undefined : 'foreground' }
					>
						Test
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
				{ menuItems.map((item: string, index: number) => (
					<NavbarMenuItem key={ `${ item }-${ index }` }>
						<Link
							color={
								index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{ item }
						</Link>
					</NavbarMenuItem>
				)) }
			</NavbarMenu>
		</Navbar>
	)
}
