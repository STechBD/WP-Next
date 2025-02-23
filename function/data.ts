export async function getPostList(type: 'category' | 'author' | 'tag' | null = null, slug: string | null = null): Promise<any> {
	let url: string = `${ process.env.API }/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,link,slug,featured_media`

	if (type && slug) {
		if (type === 'category') {
			let categoryData = []
			try {
				const res = await fetch(`${ process.env.API }/wp-json/wp/v2/categories?slug=${ slug }`)
				categoryData = await res.json()
			} catch (error) {
				console.error('Failed to fetch category data:', error)
				return []
			}

			const cid: string | null = categoryData.length > 0 ? categoryData[0].id : null
			const cname: string | null = categoryData.length > 0 ? categoryData[0].name : null

			if (!cid) return []
			url += `&categories=${ cid }`

			try {
				const postData = await fetch(url)
				const posts = await postData.json()
				return [ posts, cname ]
			} catch (error) {
				console.error('Failed to fetch posts:', error)
				return []
			}
		} else if (type === 'author') {
			let authorData = []
			try {
				const res = await fetch(`${ process.env.API }/wp-json/wp/v2/users?slug=${ slug }`)
				authorData = await res.json()
			} catch (error) {
				console.error('Failed to fetch author data:', error)
				return []
			}

			const aid: string | null = authorData.length > 0 ? authorData[0].id : null
			const aname: string | null = authorData.length > 0 ? authorData[0].name : null

			if (!aid) return []

			url += `&author=${ aid }`

			try {
				const postData = await fetch(url)
				const posts = await postData.json()
				return [ posts, aname ]
			} catch (error) {
				console.error('Failed to fetch posts:', error)
				return []
			}
		} else if (type === 'tag') {
			let tagData = []
			try {
				const res = await fetch(`${ process.env.API }/wp-json/wp/v2/tags?slug=${ slug }`)
				tagData = await res.json()
			} catch (error) {
				console.error('Failed to fetch tag data:', error)
				return []
			}

			const tid: string | null = tagData.length > 0 ? tagData[0].id : null
			const tname: string | null = tagData.length > 0 ? tagData[0].name : null

			if (!tid) return []

			url += `&tags=${ tid }`

			try {
				const postData = await fetch(url)
				const posts = await postData.json()
				return [ posts, tname ]
			} catch (error) {
				console.error('Failed to fetch posts:', error)
				return []
			}
		}
	}

	try {
		const res = await fetch(url)
		const posts = await res.json()
		return [ posts ]
	} catch (error) {
		console.error('Failed to fetch recent posts:', error)
		return []
	}
}
