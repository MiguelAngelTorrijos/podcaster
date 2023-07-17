import { useEffect, useState } from 'react'
import './styles.scss'
import PodcastHome from '../../components/PodcastHome'

import SearchBar from '../../components/SearchBar'
import Layout from '../../components/ui/Layout'
import TitleSection from '../../components/ui/TitleSection'

import useFetchDataWithCach from '../../hooks/useFetchDataWithCache'
import { scrollTop } from '../../utilities/scrollTop'

const HomePage = () => {
	const [podcasts, setPodcasts] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		scrollTop()
	}, [])

	const fetchAllPodcasts = async () => {
		const limit = 100
		const itunesURL = process.env.REACT_APP_ALL_ITUNES_API_URL

		const { data } = await useFetchDataWithCach(
			`${itunesURL}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`,
			'all_podcasts',
			24 * 60 * 60 * 1000,
		)
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
	const title = 'All Podcasts'

	return (
		<>
			<Layout>
				<div className='hoc-container'>
					<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<TitleSection title={title} quantity={filteredPodcasts?.length} />

					<div className='hoc-grid-podcasts'>
						{filteredPodcasts?.map(podcast => (
							<PodcastHome
								key={podcast.id.attributes['im:id']}
								podcast={podcast}
							/>
						))}
					</div>
					{filteredPodcasts?.length === 0 && (
						<p className='hoc-msg-nr'>{notResult}</p>
					)}
				</div>
			</Layout>
		</>
	)
}

export default HomePage
