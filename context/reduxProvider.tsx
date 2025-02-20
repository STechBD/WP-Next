'use client'

import React, { JSX } from 'react'
import { Provider } from 'react-redux'
import { store } from './reduxStore'


/**
 * The Redux provider component.
 *
 * @param { Object } props The properties of the component.
 * @param { React.ReactNode } props.children The children of the component.
 * @returns { JSX.Element } The Redux provider component.
 * @since 3.0.0
 */
export default function ReduxProvider({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<Provider store={ store }>
			{ children }
		</Provider>
	)
}
