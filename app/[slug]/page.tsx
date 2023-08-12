'use client'

import type { Metadata } from 'next'
import { useState } from 'react';
import Content from '@/app/[slug]/content'


/**
 * Metadata component to change the title.
 * @param title
 * @return { JSX.Element }
 * @since 1.0.0
 */
const metadata: Metadata = {
	title: 'Loading ...',
	description: '...',
};

/**
 * Page method to show the article content.
 * @param params
 * @constructor
 */
export default function Page({ params }: { params: { slug: string } }) {
	const [ postTitle, setPostTitle ] = useState<string>('Loading ...');

	const changeTitle = (title: string) => {
		setPostTitle(title);
		console.log('Found from child: ' + title);
	};

	return <Content slug={ params.slug } onTitleReceived={ changeTitle }/>;
};
