'use client'

/**
 * Fetcher method to fetch data using SWR technology.
 * @param url
 * @return { Promise<any> }
 * @since 1.0.0
 */
const fetcher = async (url: RequestInfo | URL): Promise<any> => {
	try {
		const response: Response = await fetch(url)
		return await response.json()
	} catch (error) {
		throw new Error('Error fetching data')
	}
}

export default fetcher
