import { JSX } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Article from '@/app/article'
import { Progress } from '@nextui-org/react'


/**
 * Content method to load all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default async function Content(): Promise<JSX.Element> {
	const api: string = (process.env.API ?? '') + '/wp-json/wp/v2/posts/'
	const date: Date = new Date()
	const hours: number = date.getHours()
	const minutes: number = date.getMinutes()
	const seconds: number = date.getSeconds()

	const data: any[] = await fetch(api).then((res) => res.json())

	if (!data) {
		return (<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">
					Error
				</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">
					Error fetching data
				</p>
			</div>
		</main>)
	}

	return (
		<main className="flex min-h-screen flex-col justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
					<strong>
						Explore
					</strong>
				</h1>
			</div>
			<div className="mb-32 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				{ data.map((post: any, index: number): any => (
					<Article key={ index } post={ post }/>
				)) }
			</div>
		</main>
	)
}
