import { JSX } from 'react'


/**
 * Interface definition for the state from Redux.
 *
 * @interface State
 * @since 1.0.0
 */
export interface State {
	lightMode: boolean
}


/**
 * Interface definition for the post list data from the WordPress REST API.
 *
 * @interface Post
 * @since 1.0.0
 */
export interface Post {
	id: number
	title: { rendered: string }
	slug: string
	author: number
	date: string
	categories: number[]
	excerpt?: { rendered: string }
	content?: { rendered: string }
	featured_media?: number
	link?: string
}


/**
 * Interface definition for WordPress media data.
 *
 * @interface Media
 * @since 1.0.0
 */
export interface Media {
	id: number
	date: string
	slug: string
	title: { rendered: string }
	alt_text: string
	caption: { rendered: string }
	source_url: string
	media_type: 'image' | 'video' | 'audio' | 'application'
	mime_type: string
	media_details?: {
		width: number
		height: number
		file: string
		sizes?: {
			[key: string]: {
				file: string
				width: number
				height: number
				mime_type: string
				source_url: string
			}
		}
	}
}


/**
 * Interface definition for the category data from the WordPress REST API.
 *
 * @interface Category
 * @since 1.0.0
 */
export interface Category {
	id: number
	name: string
	slug: string
	parent: number
	link: string
}


/**
 * Interface definition for the tag data from the WordPress REST API.
 *
 * @interface Tag
 * @since 1.0.0
 */
export interface Tag {
	id: number
	name: string
	slug: string
	link: string
}


/**
 * Interface definition for the author data from the WordPress REST API.
 *
 * @interface Author
 * @since 1.0.0
 */
export interface Author {
	id: number
	name: string
	slug: string
	link: string
	description: string
	avatar_urls: {
		[key: string]: string
	}
}


/**
 * Interface definition for the configuration data for the system.
 *
 * @interface Config
 * @since 1.0.0
 */
export interface Config {
	title: string
	tagline: string
	favicon: string
	description: string
	url: string
	baseUrl: string
	organizationName: string
	projectName: string
	presets: any[]
	header: {
		title: string
		navbar: {
			label: string
			logo: {
				light: {
					alt: string
					src: string
				}
				dark: {
					alt: string
					src: string
				}
			}
			items: {
				label: string
				link: string
				disabled?: 'mobile' | 'desktop'
			}[]
		}
	}
	footer: {
		logo: {
			light: {
				src: string
				alt: string
			}
			dark: {
				src: string
				alt: string
			}
		}
		heading: string
		description: string | JSX.Element
		menu: {
			label: string
			items: {
				label: string
				link: string
			}[]
		}[]
		copyright: string | JSX.Element
		social?: {
			facebook?: string
			x?: string
			linkedin?: string
			instagram?: string
			github?: string
		}
	}
}
