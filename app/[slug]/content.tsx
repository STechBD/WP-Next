import FeaturedImage from '@/app/_component/featuredImage'


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

/**
 * Content method to load all articles.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default async function Content({ slug }: any): Promise<JSX.Element> {
	const data = await fetcher(process.env.API + '/wp-json/wp/v2/posts?slug=' + slug)

	if (!data) {
		return (
			<main className="flex min-h-screen flex-col justify-between p-24">
				<div className="container mx-auto p-4">
					<h1 className="text-6xl font-bold text-center text-gray-800 dark:text-white">Error</h1>
					<p className="text-center text-gray-500 dark:text-gray-400">Error loading data.</p>
				</div>
			</main>
		)
	}

	return (
		<div className="grid grid-cols-1 justify-center max-w-[700px]">
			<div className="vc_column tdi_62  wpb_column vc_column_container tdc-column td-pb-span12">
				<div className="tdb-block-inner td-fix-index">
					<span><a title="" className="tdb-entry-crumb" href="https://blog.shikkhaweb.com/">Home</a></span>
					<i className="tdb-bread-sep td-icon-right"></i>
					<span><a title="View all posts in সাবজেক্ট রিভিউ" className="tdb-entry-crumb"
					         href="https://blog.shikkhaweb.com/category/subject-review/">সাবজেক্ট রিভিউ</a></span>
					<i className="tdb-bread-sep tdb-bred-no-url-last td-icon-right"></i>
					<span className="tdb-bred-no-url-last">সমুদ্রবিজ্ঞান (ওশানোগ্রাফি) - সাবজেক্ট রিভিউ</span>
				</div>
			</div>
			{/*<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				"itemListElement": [{
				"@type": "ListItem",
				"position": 1,
				"item": {
				"@type": "WebSite",
				"@id": "https://blog.shikkhaweb.com/",
				"name": "Home"
			}
			},{
				"@type": "ListItem",
				"position": 2,
				"item": {
				"@type": "WebPage",
				"@id": "https://blog.shikkhaweb.com/category/subject-review/",
				"name": "সাবজেক্ট রিভিউ"
			}
			},{
				"@type": "ListItem",
				"position": 3,
				"item": {
				"@type": "WebPage",
				"@id": "",
				"name": "সমুদ্রবিজ্ঞান (ওশানোগ্রাফি) - সাবজেক্ট রিভিউ"
			}
			}    ]
			}
			</script>*/ }
			<div className="container text-center">
				<FeaturedImage id={ data[0].featured_media }/>
			</div>
			<div className="container mx-auto">
				<h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
					{ data[0].title.rendered }
				</h1>
			</div>
			<div
				className="my-20">
				<div dangerouslySetInnerHTML={ { __html: data[0].content.rendered } }/>
			</div>
		</div>
	)
}
