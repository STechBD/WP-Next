import  Link from 'next/link'
import Head from 'next/head'
import  { Inter } from 'next/font/google'

const  inter = Inter({ subsets: ['latin'] })

function Articles()
{
	return (
		<>
			<Head>
				<title>Articles - WP-React</title>
			</Head>
		</>
	)
}

export default Articles;