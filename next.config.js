/** @type {import('next').NextConfig} */


const { parsed } = require('dotenv').config()
const domains = (process.env?.IMAGE_DOMAINS || '').split(',').filter(Boolean)
domains.push('secure.gravatar.com')

module.exports = {
	env: {
		API: process.env.API,
	},
	images: {
		domains,
	},
}
