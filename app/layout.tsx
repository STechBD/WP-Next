import React, { JSX } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import '@/style/globals.scss'
import meta from '@/data/metadata'
import ReduxProvider from '@/context/reduxProvider'
import Header from '@/component/header'
import Footer from '@/component/footer'


/**
 * The font family for the whole app.
 *
 * @see https://fonts.google.com/specimen/Inter
 * @since 1.0.0
 */
const inter: NextFont = Inter({ subsets: [ 'latin' ] })


/**
 * The metadata setup for SEO.
 *
 * @returns { Metadata } Metadata setup for the SEO.
 * @since 1.0.0
 */
export const metadata: Metadata = meta


/**
 * The Root Layout for the whole website.
 *
 * @returns { JSX.Element } Root layout for the whole website.
 * @since 1.0.0
 */
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
		<body className={ `${ inter.className } dark:bg-gray-900` }>
		<ReduxProvider>
			<Header/>
			<main className="min-h-screen">
				{ children }
			</main>
			<Footer/>
		</ReduxProvider>
		</body>
		</html>
	)
}
