'use client'

import React, { JSX, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'


/**
 * Function to trigger an animation when user scrolls to the component.
 *
 * @param ref - The reference of the component.
 * @param threshold - The threshold of the component.
 * @returns { boolean } - Whether the component is visible or not.
 * @since 1.0.0
 */
export function useIntersectionObserver(ref: React.MutableRefObject<any>, threshold: number = 0.5): boolean {
	const [ isVisible, setIsVisible ] = useState<boolean>(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([ entry ]): void => {
			setIsVisible(entry.isIntersecting)
		}, {
			root: null,
			rootMargin: '0px',
			threshold,
		})

		if (ref.current) {
			observer.observe(ref.current)
		}

		return (): void => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ ref, threshold ])

	return isVisible
}


/**
 * Bounce Animation Component.
 *
 * @param { boolean } repeat - Whether the animation should repeat or not when user scrolls to the component.
 * @param { string } style - The style of the component.
 * @param { React.ReactNode } children - The children of the component received.
 * @returns { JSX.Element } - The animated component.
 * @since 1.0.0
 */
export function Bounce({ design, hover = false, children, }: {
	design?: string,
	hover?: boolean,
	children: React.ReactNode
}): JSX.Element {
	const componentRef: any = useRef<any>(null)
	const isVisible: boolean = useIntersectionObserver(componentRef)
	const animationKey: 0 | 1 = isVisible ? 1 : 0 // Reset an animation key when isVisible changes

	return (
		<span ref={ componentRef }>
			{ isVisible && (
				<motion.div
					className={ design }
					whileHover={ hover ? { scale: 1.1 } : {} }
					key={ animationKey } // Use key to reset animation on each visibility change
					initial={ { opacity: 0, scale: 0.5 } }
					animate={ { opacity: 1, scale: 1 } }
					transition={ {
						duration: 0.3,
						ease: [ 0, 0.71, 0.2, 1.01 ],
						scale: {
							type: 'spring',
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					} }
				>
					{ children }
				</motion.div>
			) }
	    </span>
	)
}
