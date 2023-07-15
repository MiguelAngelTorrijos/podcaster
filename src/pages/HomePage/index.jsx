import { useEffect, useState } from 'react'
import './styles.scss'
import PodcastHome from '../../components/PodcastHome'

import { getAllPodcasts } from '../../services'
import SearchBar from '../../components/SearchBar'
import Layout from '../../components/ui/Layout'

const HomePage = () => {
	const [podcasts, setPodcasts] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const fetchAllPodcasts = async () => {
		const limitPodcasts = 100
		const { data } = await getAllPodcasts(limitPodcasts)
		setPodcasts(data.feed.entry)
	}

	useEffect(() => {
		fetchAllPodcasts()
	}, [])

	const filteredPodcasts = podcasts.filter(podcast => {
		const artistLabel = podcast['im:artist'].label.toLowerCase()
		const nameLabel = podcast['im:name'].label.toLowerCase()
		const searchTermLower = searchTerm.toLowerCase()

		return (
			artistLabel.includes(searchTermLower) ||
			nameLabel.includes(searchTermLower)
		)
	})

	const notResult = `Sorry at the moment we don't have the podcast ${searchTerm}, but we have other very
interesting ones.`

	return (
		<>
			<Layout>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				{filteredPodcasts.map(podcast => (
					<PodcastHome key={podcast.id.attributes['im:id']} podcast={podcast} />
				))}
				{filteredPodcasts.length === 0 && <p>{notResult}</p>}
			</Layout>
		</>
	)
}

export default HomePage
