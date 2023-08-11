'use client'

import type { Metadata } from 'next'
import Content from '@/app/[slug]/content'
import { useEffect, useState } from 'react'


const [receivedTitle, setReceivedTitle] = useState<any>('');
const changeTitle = (title: any) => {
	setReceivedTitle(title);

	const metadata: Metadata = {
		title: title, // Use the title received as an argument
		description: '...',
	}
};


export default function Page( { params }: { params: { slug: string } } ) {
	return <Content slug={ params.slug } onTitleReceived={ changeTitle }/>
};