import { literals } from '../constants/literals'
import useFetchDataWithCach from '../hooks/useFetchDataWithCache'

export const fetchAllPodcasts = async setPodcasts => {
	const { data } = await useFetchDataWithCach(
		`${literals.ITUNES_URL}/us/rss/toppodcasts/limit=${literals.LIMIT_PODCASTS_HOME}/genre=1310/json`,
		'all_podcasts',
		literals.TWENTY_FOUR_HOURS,
	)
	if (data && data.feed && data.feed.entry) {
		setPodcasts(data.feed.entry)
	} else {
		console.error(literals.ERROR_FETCHING_ALL)
	}
}
