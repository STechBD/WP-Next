export default function Header() {
	return (
		<header className="bg-white dark:bg-gray-800 shadow">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<a href="/" className="text-xl font-bold text-gray-800 dark:text-white">STechBD</a>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<a href="/about" className="text-gray-800 dark:text-white">About</a>
						<a href="/contact" className="text-gray-800 dark:text-white">Contact</a>
					</div>
				</div>
			</div>
		</header>
	)
}
