/** @type {import('next').NextConfig} */

const { parsed } = require('dotenv').config()

module.exports = {
	env: {
		API: parsed.API,
	},
	images: {
		domains: [
			'blog.shikkhaweb.com',
			'tailwindui.com',
			'images.unsplash.com'
		],
	},
}
