/**
 * Interface definition for the state from Redux.
 *
 * @interface State
 *
 * @since 1.0.0
 */
export interface State {
	lightMode: boolean
}


/**
 * Interface definition for the post list data from the WordPress REST API.
 *
 * @interface Post
 *
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
 *
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
	media_type: 'image' | 'video' | 'audio' | 'application' // WP media types
	mime_type: string // e.g., "image/jpeg", "video/mp4"
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
