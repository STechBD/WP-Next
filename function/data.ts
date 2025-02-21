export async function getPostList(type: string | null = null, slug: string | null = null): Promise<any> {
	let url: string = `${ process.env.API }/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,link,slug,featured_media`

	if (type && slug) {
		if (type === 'category') {
			const categoryData = await fetch(`${ process.env.API }/wp-json/wp/v2/categories?slug=${ slug }`)
				.then((res) => res.json())
			const cid: string | null = categoryData.length > 0 ? categoryData[0].id : null
			const cname: string | null = categoryData.length > 0 ? categoryData[0].name : null

			if (!cid) return []
			url += `&categories=${ cid }`

			return [ await fetch(url).then((res) => res.json()), cname ]
		} else if (type === 'author') {
			const authorData = await fetch(`${ process.env.API }/wp-json/wp/v2/users?slug=${ slug }`)
				.then((res) => res.json())
			const aid: string | null = authorData.length > 0 ? authorData[0].id : null
			const aname: string | null = authorData.length > 0 ? authorData[0].name : null

			if (!aid) return []

			url += `&author=${ aid }`
			return [ await fetch(url).then((res) => res.json()), aname ]
		} else if (type === 'tag') {
			const tagData = await fetch(`${ process.env.API }/wp-json/wp/v2/tags?slug=${ slug }`)
				.then((res) => res.json())
			const tid: string | null = tagData.length > 0 ? tagData[0].id : null
			const tname: string | null = tagData.length > 0 ? tagData[0].name : null

			if (!tid) return []

			url += `&tags=${ tid }`
			return [ await fetch(url).then((res) => res.json()), tname ]
		}
	}

	return [ await fetch(url).then((res) => res.json()) ]
}
