/** @type {import('next').NextConfig} */


const { parsed } = require('dotenv').config()
const domains = parsed.IMAGE_DOMAINS.split(',')
domains.push('secure.gravatar.com')

module.exports = {
	env: {
		API: parsed.API,
	},
	images: {
		domains,
	},
}
