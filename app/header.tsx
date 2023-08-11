import Link from 'next/link'


/**
 * Header method to show header.
 * @return {JSX.Element}
 * @since 1.0.0
 */

export default function Header(): JSX.Element {
	return (
		<header className="bg-gray-800 text-white sticky top-0 z-10 px-5 md:px-10">
			<div className="container mx-auto py-4">
				<nav className="flex justify-between items-center">
					<Link href="/" className="text-xl font-bold">
						My Website
					</Link>
					<ul className="hidden md:flex space-x-4">
						<li>
							<Link href="#" className="hover:text-gray-300">Home</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-gray-300">About</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-gray-300">Services</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-gray-300">Contact</Link>
						</li>
					</ul>
					<button className="md:hidden">Menu</button>
				</nav>
			</div>
		</header>
	);
};
