import { useEffect, useState } from 'react'
import './styles.scss'
import PodcastHome from '../../components/PodcastHome'

import { getAllPodcasts } from '../../services'

const HomePage = () => {
	const [podcasts, setPodcasts] = useState([])

	const fetchAllPodcasts = async () => {
		const limitPodcasts = 100
		const { data } = await getAllPodcasts(limitPodcasts)
		setPodcasts(data.feed.entry)
	}

	useEffect(() => {
		fetchAllPodcasts()
	}, [])

	return (
		<>
			{podcasts?.map(podcast => (
				<PodcastHome key={podcast.id.attributes['im:id']} podcast={podcast} />
			))}
		</>
	)
}

export default HomePage
