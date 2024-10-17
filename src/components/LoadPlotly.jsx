import React, { useEffect } from 'react'

export default function LoadPlotly() {
	useEffect(() => {
		if (typeof window !== 'undefined' && typeof window.Plotly === 'undefined') {
			const script = document.createElement('script')
			script.src = 'https://cdn.plot.ly/plotly-latest.min.js'
			script.async = true
			script.onload = () => {
				window.dispatchEvent(new Event('plotlyLoaded'))
			}
			document.head.appendChild(script)
		} else if (typeof window !== 'undefined') {
			window.dispatchEvent(new Event('plotlyLoaded'))
		}
	}, [])

	return null
}
