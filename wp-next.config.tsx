import { JSX } from 'react'


interface Config {
	label: string;
	tagline: string;
	favicon: string;
	description: string;
	url: string;
	baseUrl: string;
	organizationName: string;
	projectName: string;
	presets: any[];
	header: {
		title: string
		navbar: {
			label: string;
			logo: {
				light: {
					alt: string;
					src: string;
				};
				dark: {
					alt: string;
					src: string;
				};
			};
			items: {
				label: string;
				link: string;
			}[];
		};
	};
	footer: {
		logo: {
			light: {
				src: string;
				alt: string;
			};
			dark: {
				src: string;
				alt: string;
			};
		};
		heading: string;
		description: string | JSX.Element;
		menu: {
			label: string;
			items: {
				label: string;
				link: string;
			}[];
		}[];
		copyright: string | JSX.Element;
	};
}


const config: Config = {
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
		title: 'WP-Next',
		navbar: {
			label: 'WP-Next',
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
				},
				{
					link: '/privacy',
					label: 'Privacy',
				},
			],
		},
	},
	footer: {
		logo: {
			light: {
				src: 'image/S-Technologies-Icon-Light.svg',
				alt: 'S Technologies Logo',
			},
			dark: {
				src: 'image/S-Technologies-Icon-Light.svg',
				alt: 'S Technologies Logo',
			},
		},
		heading: 'S Technologies',
		description: <>
			<span
				className="text-white bg-primary"><strong>S Technologies</strong> (<strong>STechBD.Net</strong>)</span>
			is a research-based technology company in Bangladesh. It was founded in 2013. It provides services like
			domain registration, web hosting, web servers, software development, AI model development, software as a
			service (SaaS), UI/UX design, SEO, business solutions, etc. <span
			className="text-white bg-primary"><strong>STechnologies</strong></span> has been working on the research of
			new technologies, especially artificial intelligence, and developing new products.
		</>,
		menu: [
			{
				label: 'Website',
				items: [
					{
						label: 'Domain Name Registration',
						link: '/domain',
					},
					{
						label: 'Shared Hosting',
						link: '/shared-hosting',
					},
					{
						label: 'Reseller Hosting',
						link: '/reseller-hosting',
					},
					{
						label: 'Unmanaged VPS',
						link: '/unmanaged-vps',
					},
					{
						label: 'Managed VPS',
						link: '/managed-vps',
					},
					{
						label: 'Dedicated Server',
						link: '/dedicated-server',
					},
					{
						label: 'SSL Certificate',
						link: '/ssl-certificate',
					},
					{
						label: 'Server Information',
						link: '/server-info',
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
						link: '/product/Install-Express',
					},
					{
						label: 'CookieCons',
						link: '/product/CookieCons',
					},
					{
						label: 'ProjectPress',
						link: '/product/ProjectPress',
					},
					{
						label: 'S PHP Engine',
						link: '/product/S-PHP-Engine',
					},
					{
						label: 'S Template Engine',
						link: '/product/S-Template-Engine',
					},
					{
						label: 'S Database Explorer',
						link: '/product/S-Database-Explorer',
					},
					{
						label: 'S Number Manager',
						link: '/product/S-Number-Manager',
					},
					{
						label: 'PyWeb',
						link: '/product/PyWeb',
					},
					{
						label: 'ViewMD',
						link: '/product/ViewMD',
					},
				],
			},
			{
				label: 'Service',
				items: [
					{
						label: 'AI App Development 🎉',
						link: '/ai-development',
					},
					{
						label: 'Web App Development',
						link: '/web-development',
					},
					{
						label: 'Readymade Website Development',
						link: '/readymade-website',
					},
					{
						label: 'School Management System',
						link: '/school-management',
					},
					{
						label: 'Android App Development',
						link: '/android-development',
					},
					{
						label: 'iOS App Development',
						link: '/ios-development',
					},
					{
						label: 'Windows App Development',
						link: '/windows-development',
					},
					{
						label: 'UI/UX Design',
						link: '/ui-ux-development',
					},
					{
						label: 'Search Engine Optimization',
						link: '/seo',
					},
				],
			},
			{
				label: 'Company',
				items: [
					{
						label: 'About S Technologies',
						link: '/about',
					},
					{
						label: 'Blog',
						link: '/blog',
					},
					{
						label: 'Research and Development Wing',
						link: '/rnd',
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
						link: '/careers',
					},
					{
						label: 'GitHub',
						link: 'https://github.com/STechBD',
					},
					{
						label: 'Contact Us',
						link: '/contact',
					},
					{
						label: 'Privacy Policy',
						link: '/privacy',
					},
					{
						label: 'Terms of Service',
						link: '/terms',
					},
					{
						label: 'Disclaimer',
						link: '/disclaimer',
					},
					{
						label: 'Refund Policy',
						link: '/refund',
					},
					{
						label: 'Sitemap',
						link: '/sitemap',
					},
				],
			},
		],
		copyright: <>
			© 2013-${ new Date().getFullYear().toString().slice(-2) } <strong><a href="https://www.stechbd.net"
			                                                                     target="_blank">S
			Technologies</a></strong>. Built with <strong><a href="https://www.stechbd.net/product/WP-Next"
			                                                 target="_blank">WP-Next</a></strong>.
		</>,
	},
}


export default config
