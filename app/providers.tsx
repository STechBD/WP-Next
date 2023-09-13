'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<NextThemeProvider attribute="class" defaultTheme="light" themes={ [ 'light', 'dark' ] }>
				{ children }
			</NextThemeProvider>
		</NextUIProvider>
	)
}
