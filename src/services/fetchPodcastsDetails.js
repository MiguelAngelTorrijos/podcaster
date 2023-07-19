import { literals } from '../constants/literals'
import useFetchDataWithCach from '../hooks/useFetchDataWithCache'

export const fetchPodcastsDetails = async (id, setPodcastDetails) => {
	const url = `${literals.ITUNES_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${literals.LIMIT_PODCASTS_DETAILS}`
	const { data } = await useFetchDataWithCach(
		`${literals.ALL_ORIGINS_PROXY}/get?url=${encodeURIComponent(url)}`,
		`podcast_${id}`,
		literals.TWENTY_FOUR_HOURS,
	)
	if (data && data.contents) {
		setPodcastDetails(JSON.parse(data.contents))
	} else {
		console.error(literals.ERROR_FETCHING_DETAILS)
	}
}
