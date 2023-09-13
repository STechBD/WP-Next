let lightCodeTheme = require('prism-react-renderer/themes/github')
let darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config: Object = {
	title: 'My WP-Next Blog',
	tagline: 'WP-Next is cool',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-wp-next-test-site.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it often is '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'wp-next', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ],
	},

	presets: [],

	themeConfig:
		({
			// Replace with your project's social card
			image: 'img/wp-next-social-card.jpg',
			navbar: {
				title: 'My Site',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Tutorial',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/wp-next',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/wp-next',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/wp-next',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/wp-next',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/wp-next',
							},
						],
					},
				],
				copyright: `Copyright © ${ new Date().getFullYear() } My Project, Inc. Built with WP-Next.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		})
}

module.exports = config
