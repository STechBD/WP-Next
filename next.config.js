/** @type {import('next').NextConfig} */

const { parsed } = require('dotenv').config()

module.exports = {
	env: {
		API: parsed.API,
	},
	images: {
		domains: parsed.IMAGE_DOMAINS
      ? parsed.IMAGE_DOMAINS.split(',')
      : [],
	},
}
