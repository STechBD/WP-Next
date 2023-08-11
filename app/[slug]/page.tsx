import type { Metadata } from 'next'
import Content from '@/app/[slug]/content'


export default function Page( { params }: { params: { slug: string } } ) {
	const changeTitle = (title: any) => {
		const metadata: Metadata = {
			title: title,
			description: '...',
		}
	};

	return <Content slug={ params.slug } onTitleReceived={ changeTitle }/>
};