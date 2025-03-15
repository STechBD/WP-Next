import { JSX } from 'react'
import { Config } from '@/data/type'


const config: Config = {
	title: 'WP-Next Blog',
	tagline: 'WP-Next is cool',
	favicon: '/favicon.ico',
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
		title: 'WP-Next',
		navbar: {
			label: 'WP-Next',
			logo: {
				light: {
					alt: 'WP-Next Logo',
					src: '/image/WP-Next-Logo-Light.svg',
				},
				dark: {
					alt: 'WP-Next Logo',
					src: '/image/WP-Next-Logo-Dark.svg',
				},
			},
			items: [
				{
					label: 'Home',
					link: '/',
					disabled: 'desktop',
				},
				{
					label: 'About',
					link: 'https://www.stechbd.net/product/WP-Next',
				},
				{
					label: 'Privacy',
					link: 'https://www.stechbd.net/privacy',
				},
			],
		},
	},
	footer: {
		logo: {
			light: {
				src: '/image/S-Technologies-Icon-Light.svg',
				alt: 'S Technologies Logo',
			},
			dark: {
				src: '/image/S-Technologies-Icon-Light.svg',
				alt: 'S Technologies Logo',
			},
		},
		heading: 'S Technologies',
		description: <>
			<span
				className="text-white bg-primary"><strong>S Technologies</strong> (<strong>STechBD.Net</strong>)
			</span> is a research-based technology company in Bangladesh. It was founded in 2013. It provides services
			like domain registration, web hosting, web servers, software development, AI model development, software as
			a service (SaaS), UI/UX design, SEO, business solutions, etc. <span
			className="text-white bg-primary"><strong>STechnologies</strong></span> has been working on the research of
			new technologies, especially artificial intelligence, and developing new products.
		</>,
		menu: [
			{
				label: 'Website',
				items: [
					{
						label: 'Domain Name Registration',
						link: 'https://www.stechbd.net/domain',
					},
					{
						label: 'Shared Hosting',
						link: 'https://www.stechbd.net/shared-hosting',
					},
					{
						label: 'Reseller Hosting',
						link: 'https://www.stechbd.net/reseller-hosting',
					},
					{
						label: 'Unmanaged VPS',
						link: 'https://www.stechbd.net/unmanaged-vps',
					},
					{
						label: 'Managed VPS',
						link: 'https://www.stechbd.net/managed-vps',
					},
					{
						label: 'Dedicated Server',
						link: 'https://www.stechbd.net/dedicated-server',
					},
					{
						label: 'SSL Certificate',
						link: 'https://www.stechbd.net/ssl-certificate',
					},
					{
						label: 'Server Information',
						link: 'https://www.stechbd.net/server-info',
					},
				],
			},
			{
				label: 'Product',
				items: [
					{
						label: 'Shunno Programming Language 🎉',
						link: 'https://shunno.stechbd.net',
					},
					{
						label: 'Britto AI 🎉',
						link: 'https://britto.stechbd.net',
					},
					{
						label: 'Fishtock 🎉',
						link: 'https://fishtock.stechbd.net',
					},
					{
						label: 'Install Express 🎉',
						link: 'https://www.stechbd.net/product/Install-Express',
					},
					{
						label: 'WP-Next 🎉',
						link: 'https://www.stechbd.net/product/WP-Next',
					},
					{
						label: 'CookieCons',
						link: 'https://www.stechbd.net/product/CookieCons',
					},
					{
						label: 'ProjectPress',
						link: 'https://www.stechbd.net/product/ProjectPress',
					},
					{
						label: 'S PHP Engine',
						link: 'https://www.stechbd.net/product/S-PHP-Engine',
					},
					{
						label: 'S Template Engine',
						link: 'https://www.stechbd.net/product/S-Template-Engine',
					},
					{
						label: 'S Database Explorer',
						link: 'https://www.stechbd.net/product/S-Database-Explorer',
					},
					{
						label: 'S Number Manager',
						link: 'https://www.stechbd.net/product/S-Number-Manager',
					},
					{
						label: 'PyWeb',
						link: 'https://www.stechbd.net/product/PyWeb',
					},
					{
						label: 'ViewMD',
						link: 'https://www.stechbd.net/product/ViewMD',
					},
				],
			},
			{
				label: 'Service',
				items: [
					{
						label: 'AI App Development 🎉',
						link: 'https://www.stechbd.net/ai-development',
					},
					{
						label: 'Web App Development',
						link: 'https://www.stechbd.net/web-development',
					},
					{
						label: 'Readymade Website Development',
						link: 'https://www.stechbd.net/readymade-website',
					},
					{
						label: 'School Management System',
						link: 'https://www.stechbd.net/school-management',
					},
					{
						label: 'Android App Development',
						link: 'https://www.stechbd.net/android-development',
					},
					{
						label: 'iOS App Development',
						link: 'https://www.stechbd.net/ios-development',
					},
					{
						label: 'Windows App Development',
						link: 'https://www.stechbd.net/windows-development',
					},
					{
						label: 'UI/UX Design',
						link: 'https://www.stechbd.net/ui-ux-development',
					},
					{
						label: 'Search Engine Optimization',
						link: 'https://www.stechbd.net/seo',
					},
				],
			},
			{
				label: 'Company',
				items: [
					{
						label: 'About S Technologies',
						link: 'https://www.stechbd.net/about',
					},
					{
						label: 'Blog',
						link: 'https://www.stechbd.net/blog',
					},
					{
						label: 'Research and Development Wing',
						link: 'https://www.stechbd.net/rnd',
					},
					{
						label: 'S Technologies AI',
						link: 'https://ai.stechbd.net',
					},
					{
						label: 'Client Panel',
						link: 'https://cpanel.stechbd.net',
					},
					{
						label: 'Careers',
						link: 'https://www.stechbd.net/careers',
					},
					{
						label: 'GitHub',
						link: 'https://github.com/STechBD',
					},
					{
						label: 'Contact Us',
						link: 'https://www.stechbd.net/contact',
					},
					{
						label: 'Privacy Policy',
						link: 'https://www.stechbd.net/privacy',
					},
					{
						label: 'Terms of Service',
						link: 'https://www.stechbd.net/terms',
					},
					{
						label: 'Disclaimer',
						link: 'https://www.stechbd.net/disclaimer',
					},
					{
						label: 'Refund Policy',
						link: 'https://www.stechbd.net/refund',
					},
					{
						label: 'Sitemap',
						link: 'https://www.stechbd.net/sitemap',
					},
				],
			},
		],
		copyright: <span>
			© 2013-{ new Date().getFullYear().toString().slice(-2) }&nbsp;<strong>
			<a href="https://www.stechbd.net" target="_blank">S Technologies</a></strong>. Built with&nbsp;<strong>
			<a href="https://www.stechbd.net/product/WP-Next" target="_blank">WP-Next</a></strong>.
		</span>,
		social: {
			facebook: 'https://www.facebook.com/STechBD.Net',
			x: 'https://www.twitter.com/STechBD_Net',
			linkedin: 'https://www.linkedin.com/company/STechBD',
			instagram: 'https://www.instagram.com/STechBD',
			github: 'https://github.com/STechBD',
		}
	},
}


export default config
