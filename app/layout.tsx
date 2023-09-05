import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/header'


const inter = Inter({ subsets: [ 'latin' ] })

/**
 * Metadata to change the title and the description.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export const metadata: Metadata = {
	title: 'Loading ...',
	description: 'Developed by S Technologies.',
}

/**
 * RootLayout method to load the basic structure of the layout.
 *
 * It includes the header and the children.
 *
 * @param children
 * @since 1.0.0
 */
export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className={ inter.className }>
		<Header/>
		{ children }
		</body>
		</html>
	)
}
