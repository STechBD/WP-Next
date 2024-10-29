import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { PostList } from '@/app/_data/type'


export default function Post() {
	const API: string | undefined = process.env.API
	const [ postData, setPostData ] = useState<string | null>(null)
	const fetchData = async () => {
		// Check if the cookie already exists
		const cachedData: string | undefined = Cookie.get('WP-Next-Post')

		if (cachedData) {
			setPostData(cachedData)
		} else {
			try {
				const response = await fetch(
					`${ API }/wp-json/wp/v2/posts?_fields=id,title,author,slug,date,categories&per_page=100`
				)

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const data = await response.json()

				const formattedData = data.map((post: PostList) => ({
					id: post.id,
					title: post.title.rendered,
					slug: post.slug,
					author: post.author,
					date: post.date,
					categories: post.categories.map((category) => ({ id: category })),
				}))

				// Set the cookie with the fetched data
				Cookie.set('WP-Next-Post', formattedData, {
					expires: new Date(Date.now() + 60 * 60 * 1000), // 60 minutes
					path: '/',
				})

				setPostData(formattedData)
			} catch (error) {
				console.error('Error:', error)
			}
		}
	}

	useEffect((): void => {
		fetchData()
	}, [])

	return postData
}
