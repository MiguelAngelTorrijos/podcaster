import axios from 'axios'

const useFetchDataWithCach = async (
	url,
	cacheKey,
	maxAge = 24 * 60 * 60 * 1000,
) => {
	try {
		const cachedData = localStorage.getItem(cacheKey)
		if (cachedData) {
			const { data, timestamp } = JSON.parse(cachedData)
			const currentTime = new Date().getTime()
			if (currentTime - timestamp < maxAge) {
				return { data }
			} else {
				localStorage.removeItem(cacheKey)
			}
		}

		const response = await axios.get(url)
		const data = response.data

		const currentTime = new Date().getTime()
		const dataWithTimestamp = JSON.stringify({ data, timestamp: currentTime })
		localStorage.setItem(cacheKey, dataWithTimestamp)
		return { data }
	} catch (error) {
		console.error('Error al obtener la data:', error)
		throw error
	}
}

export default useFetchDataWithCach
