/**
 * Interface definition for the state from Redux.
 *
 * @interface PostList
 *
 * @since 1.0.0
 */
export interface State {
	lightMode: boolean
}


/**
 * Interface definition for the post list data.
 *
 * @interface PostList
 *
 * @since 1.0.0
 */
export interface PostList {
	id: any
	title: { rendered: any; }
	slug: any
	author: any
	date: any
	categories: any[]
}
