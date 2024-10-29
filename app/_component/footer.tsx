'use client'

import { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Bounce } from '@/app/_component/animation'


/**
 * Footer component.
 *
 * @returns { JSX.Element } Footer component.
 * @since 1.0.0
 */
export default function Footer(): JSX.Element {
	const website = [
		{
			title: 'Domain Name Registration',
			link: '/domain',
		},
		{
			title: 'Shared Hosting',
			link: '/shared-hosting',
		},
		{
			title: 'Reseller Hosting',
			link: '/reseller-hosting',
		},
		{
			title: 'Unmanaged VPS',
			link: '/unmanaged-vps',
		},
		{
			title: 'Managed VPS',
			link: '/managed-vps',
		},
		{
			title: 'Dedicated Server',
			link: '/dedicated-server',
		},
		{
			title: 'SSL Certificate',
			link: '/ssl-certificate',
		},
		{
			title: 'Server Information',
			link: '/server-info',
		},
	]
	const product = [
		{
			title: 'Shunno Programming Language 🎉',
			link: 'https://shunno.stechbd.net',
		},
		{
			title: 'Britto AI 🎉',
			link: 'https://britto.stechbd.net',
		},
		{
			title: 'Fishtock 🎉',
			link: 'https://fishtock.stechbd.net',
		},
		{
			title: 'Install Express 🎉',
			link: '/product/Install-Express',
		},
		{
			title: 'CookieCons',
			link: '/product/CookieCons',
		},
		{
			title: 'ProjectPress',
			link: '/product/ProjectPress',
		},
		{
			title: 'S PHP Engine',
			link: '/product/S-PHP-Engine',
		},
		{
			title: 'S Template Engine',
			link: '/product/S-Template-Engine',
		},
		{
			title: 'S Database Explorer',
			link: '/product/S-Database-Explorer',
		},
		{
			title: 'S Number Manager',
			link: '/product/S-Number-Manager',
		},
		{
			title: 'PyWeb',
			link: '/product/PyWeb',
		},
		{
			title: 'ViewMD',
			link: '/product/ViewMD',
		},
	]
	const service = [
		{
			title: 'AI App Development 🎉',
			link: '/ai-development',
		},
		{
			title: 'Web App Development',
			link: '/web-development',
		},
		{
			title: 'Readymade Website Development',
			link: '/readymade-website',
		},
		{
			title: 'School Management System',
			link: '/school-management',
		},
		{
			title: 'Android App Development',
			link: '/android-development',
		},
		{
			title: 'iOS App Development',
			link: '/ios-development',
		},
		{
			title: 'Windows App Development',
			link: '/windows-development',
		},
		{
			title: 'UI/UX Design',
			link: '/ui-ux-development',
		},
		{
			title: 'Search Engine Optimization',
			link: '/seo',
		},
	]
	const company = [
		{
			title: 'About S Technologies',
			link: '/about',
		},
		{
			title: 'Blog',
			link: '/blog',
		},
		{
			title: 'Research and Development Wing',
			link: '/rnd',
		},
		{
			title: 'S Technologies AI',
			link: 'https://ai.stechbd.net',
		},
		{
			title: 'Client Panel',
			link: 'https://cpanel.stechbd.net',
		},
		{
			title: 'Careers',
			link: '/careers',
		},
		{
			title: 'GitHub',
			link: 'https://github.com/STechBD',
		},
		{
			title: 'Contact Us',
			link: '/contact',
		},
		{
			title: 'Privacy Policy',
			link: '/privacy',
		},
		{
			title: 'Terms of Service',
			link: '/terms',
		},
		{
			title: 'Disclaimer',
			link: '/disclaimer',
		},
		{
			title: 'Refund Policy',
			link: '/refund',
		},
		{
			title: 'Sitemap',
			link: '/sitemap',
		},
	]

	return (<>
		<footer className="relative bg-gray-100 dark:bg-gray-900">
			<div className="relative mx-auto px-2 lg:px-16 w-full">
				<div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 lg:grid-cols-6">
					<div className="col-span-2 mb-6 grid grid-cols-3 justify-center">
						<div className="flext justify-end">
							<Bounce hover={ true }>
								<Image
									src="/image/S-Technologies-Icon-Light.svg"
									className="mr-3 text-right"
									alt="S Technologies Logo"
									height="100"
									width="100"
								/>
							</Bounce>
						</div>
						<div className="col-span-2">
							<div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mb-3">
								<strong>
									S Technologies
								</strong>
							</div>
							<div className="mb-3 dark:text-gray-400">
								<span className="text-white bg-primary"><strong>S Technologies</strong> (<strong>
								STechBD.Net</strong>)</span> is a research-based technology company in Bangladesh. It
								was founded in 2013. It provides services like domain registration, web hosting, web
								servers, software development, AI model development, software as a service (SaaS), UI/UX
								design, SEO, business solutions, etc. <span className="text-white bg-primary"><strong>S
								Technologies</strong></span> has been working on the research of new technologies,
								especially artificial intelligence, and developing new products.
							</div>
							<div className="text-green-700">
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 6 3"
									     className="inline-block mr-1"
									>
										<rect fill="#009639" width="6" height="3"/>
										<rect fill="#FFF" width="6" height="2"/>
										<rect width="6" height="1"/>
										<path fill="#ED2E38" d="M0,0l2,1.5L0,3Z"/>
									</svg>
									<Link href="/stand-with-palestine">
										<strong>
											#StandWithPalestine
										</strong>
									</Link>
								</div>
								<div>
									<svg width="24" height="16" version="1.1" viewBox="0 0 900 600"
									     className="inline-block mr-1" xmlns="http://www.w3.org/2000/svg"
									>
										<rect id="red" width="900" height="600" rx="0" ry="0" fill="#ff0000"/>
										<g id="three" fill="#ffffff">
											<g id="g344" strokeWidth=".921835">
												<rect x="45" y="30" width="42.75" height="540" rx="0" ry="0"/>
												<rect x="125" y="30" width="42.75" height="540" rx="0" ry="0"/>
												<rect x="205" y="30" width="42.75" height="540" rx="0" ry="0"/>
											</g>
											<path
												fillRule="evenodd"
												d="m444.701 385.652s0.0901-4.46463 3.14071-16.8314c3.6718-14.8852 15.0266-43.3623 53.9968-82.3325 77.433-77.433 173.937-148.618 275.986-137.377-47.4987 23.4603-93.5535 45.1147-133.084 72.3515-38.248 26.353-68.0866 66.2642-94.9044 111.627-7.88645 13.3402-19.9553 49.3139-22.1127 60.6906h231.666c21.9266 0.0623 38.7409 19.8533 39.3517 41.8176 0.31642 11.3788-8.17005 20.5886-19.693 21.9024 0 0-273.486-0.0636-372.796-0.0494-67.4168 0.01-60.723-43.5975-52.361-53.5106 9.53668-11.3057 57.4062-10.1602 57.4062-10.1602l0.54542-200.495c0.0384-14.1302-20.1808-8.8522-20.1808-25.7393 0-15.1847 6.1132-17.9616 19.6354-22.488 6.82939-2.28607 12.0807-4.37658 21.5444 0 14.2838 6.60572 12.8236 19.1733 13.363 24.3846 1.43175 13.7502 1.63629 60.6905 1.63629 60.6905z"
											/>
										</g>
									</svg>
									<Link href="/stand-with-kashmir">
										<strong>
											#StandWithKashmir
										</strong>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div>
						<h2 className="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
							<strong>
								Website
							</strong>
						</h2>
						<ul className="text-gray-600 text-sm dark:text-gray-400 font-medium">
							{ website.map((item, index) => (
								<li key={ index } className="mb-2">
									<Link
										href={ item.link }
										target={ item.link.startsWith('http') ? '_blank' : '' }
									>
										{ item.title }
									</Link>
								</li>
							)) }
						</ul>
					</div>
					<div>
						<h2 className="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
							<strong>
								Product
							</strong>
						</h2>
						<ul className="text-gray-600 text-sm dark:text-gray-400 font-medium">
							{ product.map((item, index) => (
								<li key={ index } className="mb-2">
									<Link
										href={ item.link }
										target={ item.link.startsWith('http') ? '_blank' : '' }
									>
										{ item.title }
									</Link>
								</li>
							)) }
						</ul>
					</div>
					<div>
						<h2 className="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
							<strong>
								Service
							</strong>
						</h2>
						<ul className="text-gray-600 text-sm dark:text-gray-400 font-medium">
							{ service.map((item, index) => (
								<li key={ index } className="mb-2">
									<Link
										href={ item.link }
										target={ item.link.startsWith('http') ? '_blank' : '' }
									>
										{ item.title }
									</Link>
								</li>
							)) }
						</ul>
					</div>
					<div>
						<h2 className="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
							<strong>
								Company
							</strong>
						</h2>
						<ul className="text-gray-600 text-sm dark:text-gray-400 font-medium">
							{ company.map((item, index) => (
								<li key={ index } className="mb-2">
									<Link
										href={ item.link }
										target={ item.link.startsWith('http') ? '_blank' : '' }
									>
										{ item.title }
									</Link>
								</li>
							)) }
						</ul>
						<Image
							src="https://images.dmca.com/Badges/dmca-badge-w200-2x1-03.png?ID=2b2a9269-d99b-4199-ad70-2e00c8556201"
							alt="DMCA.com Protection Status"
							className="h-10 w-auto"
							height={ 100 }
							width={ 100 }
						/>
					</div>
				</div>
				<hr className="dark:border-t-gray-300"/>
				<div className="px-4 py-6 md:flex md:items-center md:justify-between">
					<div
						className="flex mt-4 justify-center text-sm text-gray-700 lg:justify-start dark:text-gray-300"
					>
				        <span>
					        © 2013-{ new Date().getFullYear().toString().slice(-2) } <Link
					        href="https://www.stechbd.net">
						        <strong>
							        S Technologies
								</strong>
							</Link>. All Rights Reserved.
						</span>
					</div>
					<div className="social flex mt-4 space-x-5 justify-center lg:mt-0 lg:justify-end">
						<Link href="https://www.facebook.com/STechBD.Net" target="_blank" className="text-gray-700">
							<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
							     fill="currentColor" viewBox="0 0 8 20"
							>
								<path fillRule="evenodd" clipRule="evenodd"
								      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
								/>
							</svg>
							<span className="sr-only">Facebook Page</span>
						</Link>
						<Link href="https://www.linkedin.com/in/STechBD" target="_blank" className="text-gray-700">
							<svg fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16"
							     xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
								/>
							</svg>
							<span className="sr-only">LinkedIn Company</span>
						</Link>
						<Link href="https://www.x.com/STechBD_Net" target="_blank" className="text-gray-700">
							<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							     viewBox="0 0 16 16"
							>
								<path
									d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
								/>
							</svg>
							<span className="sr-only">X (Twitter) Profile</span>
						</Link>
						<Link href="https://www.instagram.com/STechBD" target="_blank" className="text-gray-700">
							<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
							     fill="currentColor" viewBox="0 0 16 16"
							>
								<path
									d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
								/>
							</svg>
							<span className="sr-only">Instagram Profile</span>
						</Link>
						<Link href="https://github.com/STechBD" target="_blank" className="text-gray-700">
							<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
							     fill="currentColor" viewBox="0 0 20 20"
							>
								<path fillRule="evenodd"
								      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
								      clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">GitHub Account</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
		{
			process.env.NODE_ENV === 'production' ? (<>
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-XWQG24GEHS" async
				        strategy="lazyOnload"></Script>
				<Script id="google-analytics">
					{
						`window.dataLayer = window.dataLayer || [];
						function gtag(){ dataLayer.push(arguments); }
						gtag('js', new Date());

						gtag('config', 'G-XWQG24GEHS');`
					}
				</Script>
			</>) : <></>
		}
	</>)
}
