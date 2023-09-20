'use client'

import Image from 'next/image'
import Post from '@/app/storage/post'
import { useEffect, useState } from 'react'


export default function Page(): JSX.Element {
	const [ data, setData ] = useState(null)

	useEffect(() => {
		async function fetchData() {
			try {
				const apiData = await Post()
				setData(apiData)
			} catch (error) {
				console.error('Error: ', error)
			}
		}

		fetchData()
	}, [])

	/*Post().then((data) => {
		console.log('yahooo')
	}).catch((error) => {
		console.error('error')
	})*/

	/*async function processData() {
		try {
			const data = await Post();
			console.log(data);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	console.log(processData())*/

	/*const API = process.env.API;

	async function fetchData() {
		const response = await fetch(`${ API }/wp-json/wp/v2/posts?_fields=id,title,author,categories&per_page=1`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	}

	// Call the fetchData function and use the returned Promise
	fetchData()
		.then((postData) => {
			// Now you can use postData outside the .then block
			console.log(postData);
			// You can perform other operations with postData here
		})
		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
		});*/


	return (
		<main>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{ data && data.map((post) => (
					<div className="grid lg:grid-cols-2 gap-6" key={ post.id }>
						{ post.title }
					</div>
				)) }
			</div>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{ data ? JSON.stringify(data) : 'No data' }
			</div>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

				<div className="grid lg:grid-cols-2 gap-6">

					<a className="group relative block" href="#">
						<div
							className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
							<Image className="w-full h-full absolute top-0 left-0 object-cover"
							       src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
							       height={ 100 } width={ 100 } alt="Image Description"/>
						</div>

						<div className="absolute top-0 inset-x-0 z-10">
							<div className="p-4 flex flex-col h-full sm:p-6">

								<div className="flex items-center">
									<div className="flex-shrink-0">
										<Image className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
										       src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										       height={ 100 } width={ 100 } alt="Image Description"/>
									</div>
									<div className="ml-2.5 sm:ml-4">
										<h4 className="font-semibold text-white">
											Gloria
										</h4>
										<p className="text-xs text-white/[.8]">
											Jan 09, 2021
										</p>
									</div>
								</div>

							</div>
						</div>

						<div className="absolute bottom-0 inset-x-0 z-10">
							<div className="flex flex-col h-full p-4 sm:p-6">
								<h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
									Facebook is creating a news section in Watch to feature breaking news
								</h3>
								<p className="mt-2 text-white/[.8]">
									Facebook launched the Watch platform in August
								</p>
							</div>
						</div>
					</a>


					<a className="group relative block" href="#">
						<div
							className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
							<Image className="w-full h-[350px] absolute top-0 left-0 object-cover"
							       src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
							       height={ 100 } width={ 100 } alt="Image Description"/>
						</div>

						<div className="absolute top-0 inset-x-0 z-10">
							<div className="p-4 flex flex-col h-full sm:p-6">

								<div className="flex items-center">
									<div className="flex-shrink-0">
										<Image className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
										       src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										       height={ 100 } width={ 100 } alt="Image Description"/>
									</div>
									<div className="ml-2.5 sm:ml-4">
										<h4 className="font-semibold text-white">
											Gloria
										</h4>
										<p className="text-xs text-white/[.8]">
											May 30, 2021
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="absolute bottom-0 inset-x-0 z-10">
							<div className="flex flex-col h-full p-4 sm:p-6">
								<h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
									What CFR (Conversations, Feedback, Recognition) really is about
								</h3>
								<p className="mt-2 text-white/[.8]">
									For a lot of people these days, Measure What Matters.
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>


			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

				<div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest
						news</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">We've helped some great companies brand, design
						and get to market.</p>
				</div>


				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">

					<a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
					   href="#">
						<div className="aspect-w-16 aspect-h-9">
							<Image className="w-full object-cover rounded-t-xl"
							       src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
							       alt="Image Description" height={ 100 } width={ 100 }/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
								Product
							</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
								Better is when everything works together
							</h3>
						</div>
					</a>


					<a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
					   href="#">
						<div className="aspect-w-16 aspect-h-9">
							<Image className="w-full object-cover rounded-t-xl"
							       src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
							       alt="Image Description" height={ 100 } width={ 100 }/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
								Business
							</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
								What CFR really is about
							</h3>
						</div>
					</a>


					<a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
					   href="#">
						<div className="aspect-w-16 aspect-h-9">
							<Image className="w-full object-cover rounded-t-xl"
							       src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
							       alt="Image Description" height={ 100 } width={ 100 }/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
								Business
							</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
								Should Product Owners think like entrepreneurs?
							</h3>
						</div>
					</a>


					<a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
					   href="#">
						<div className="aspect-w-16 aspect-h-9">
							<Image className="w-full object-cover rounded-t-xl"
							       src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
							       alt="Image Description" height={ 100 } width={ 100 }/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
								Facilitate
							</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
								Announcing Front Strategies: Ready-to-use rules
							</h3>
						</div>
					</a>

				</div>


				<div className="text-center">
					<div
						className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
						<div className="py-3 px-4 flex items-center gap-x-2">
							<p className="text-gray-600 dark:text-gray-400">
								Want to read more?
							</p>
							<a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
							   href="../docs/index.html">
								Go here
								<svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</a>
						</div>
					</div>
				</div>

			</div>

		</main>
	)
}