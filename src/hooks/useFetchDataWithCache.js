import axios from 'axios'
import { literals } from '../constants/literals'

const useFetchDataWithCach = async (
	url,
	cacheKey,
	maxAge = literals.TWENTY_FOUR_HOURS,
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
		console.error(literals.ERROR_FETCHING_CATCH, error)
		throw error
	}
}

export default useFetchDataWithCach
