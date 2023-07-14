import axios from 'axios'

const allOriginsProxy = process.env.REACT_APP_ALL_SERVICE_API_URL
const itunesURL = process.env.REACT_APP_ALL_ITUNES_API_URL

const getAllPodcasts = (limit = 100) =>
	axios.get(`${itunesURL}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)

const getPodcastDetails = (limitPodcastsDetails = 20, id) => {
	const url = `${itunesURL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limitPodcastsDetails}`

	return axios.get(`${allOriginsProxy}/get?url=${encodeURIComponent(url)}`)
}

export { getAllPodcasts, getPodcastDetails }
