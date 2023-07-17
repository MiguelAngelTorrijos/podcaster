export const infoCachedData = (maxAge, cacheKey, data) => {
	const cachedData = localStorage.getItem(cacheKey)

	if (cachedData) {
		const { timestamp } = JSON.parse(cachedData)
		const currentTime = new Date().getTime()

		if (currentTime - timestamp >= maxAge) {
			localStorage.removeItem(cacheKey)
		}
	}
	const currentTime = new Date().getTime()
	const dataWithTimestamp = JSON.stringify({
		data,
		timestamp: currentTime,
	})
	localStorage.setItem(cacheKey, dataWithTimestamp)
}
