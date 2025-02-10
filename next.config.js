/** @type {import('next').NextConfig} */

const { parsed } = require('dotenv').config()

module.exports = {
	env: {
		API: parsed.API,
	},
	images: {
		domains: process.env.IMAGE_DOMAINS
      ? process.env.IMAGE_DOMAINS.split(',')
      : [],
	},
}
