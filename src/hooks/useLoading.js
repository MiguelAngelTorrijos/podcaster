import { useEffect, useState } from 'react'

export const useLoading = intervalMs => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIsLoading(prevLoading => !prevLoading)
		}, intervalMs)

		return () => {
			clearInterval(interval)
		}
	}, [intervalMs])

	return isLoading
}
