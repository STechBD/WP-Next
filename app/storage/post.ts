'use client'

import Cookie from 'js-cookie'
import { useEffect } from 'react'


const API = process.env.API;

export default async function Post() {
	if (!!Cookie.get('WP-Next-Post'))
	{
		return Cookie.get('WP-Next-Post')
	}

	const response = await fetch(`${ API }/wp-json/wp/v2/posts?_fields=id,title,author,slug,date,categories&per_page=100`)

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	let data = await response.json()

	data = data.map((post: { id: any; title: { rendered: any; }; slug: any; author: any; date: any; categories: any[]; }) => {
		return {
			id: post.id,
			title: post.title.rendered,
			slug: post.slug,
			author: post.author,
			date: post.date,
			categories: post.categories.map((category) => {
				return {
					id: category,
				}
			}),
		}
	})

	Cookie.set('WP-Next-Post', JSON.stringify(data), {
		expires: new Date(Date.now() + 60 * 60),
		path: '',
	})

	return await data
}
