const config: Object = {
	title: 'WP-Next Blog',
	tagline: 'WP-Next is cool',
	favicon: 'image/favicon.ico',
	description: 'WP-Next is a cool framework for building websites with WordPress and Next.js.',

	// Set the production url of your site here
	url: 'https://your-wp-next-test-site.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it often is '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'STechBD', // Usually your GitHub org/user name.
	projectName: 'WP-Next', // Usually your repo name.

	presets: [],

	header: {
		// Replace with your project's information
		navbar: {
			title: 'WP-Next',
			logo: {
				light: {
					alt: 'WP-Next Logo',
					src:
						'image/WP-Next-Logo-Light.svg',
				},
				dark: {
					alt: 'WP-Next Logo',
					src:
						'image/WP-Next-Logo-Dark.svg',
				},
			},
			items: [
				{
					link: '/about',
					label: 'About',
					target: '',
				},
				{
					link: '/privacy',
					label: 'Privacy',
					target: '',
				},
			],
		},
	},
	footer: {
		menu: [
			{
				title: 'Explore',
				items: [
					{
						label: 'About',
						link: '/about',
					},
				],
			},
			{
				title: 'Community',
				items: [
					{
						label: 'Stack Overflow',
						link: 'https://stackoverflow.com/questions/tagged/wp-next',
					},
					{
						label: 'Discord',
						link: 'https://discordapp.com/invite/wp-next',
					},
					{
						label: 'Twitter',
						link: 'https://twitter.com/STechBD_Net',
					},
				],
			},
			{
				title: 'Company',
				items: [
					{
						label: 'S Technologies',
						link: 'https://www.stechbd.net',
					},
					{
						label: 'Blog',
						link: 'https://www.stechbd.net/blog',
					},
					{
						label: 'GitHub',
						link: 'https://github.com/STechBD/WP-Next',
					},
				],
			},
		],
		copyright: `© 2013-${ new Date().getFullYear().toString().slice(-2) } <strong><a href="https://www.stechbd.net" target="_blank">S Technologies</a></strong>. Built with <strong><a href="https://www.stechbd.net/product/WP-Next" target="_blank">WP-Next</a></strong>.`,
	},
}


export default config
