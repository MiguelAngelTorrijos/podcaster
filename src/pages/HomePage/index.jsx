import { useEffect, useState } from 'react'
import './styles.scss'
import PodcastHome from '../../components/PodcastHome'

import SearchBar from '../../components/SearchBar'
import Layout from '../../components/ui/Layout'
import TitleSection from '../../components/ui/TitleSection'

import { scrollTop } from '../../utilities/scrollTop'
import { literals } from '../../constants/literals'
import { fetchAllPodcasts } from '../../services/fetchAllPodcasts'

const HomePage = () => {
	const [podcasts, setPodcasts] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		scrollTop()
	}, [])

	useEffect(() => {
		fetchAllPodcasts(setPodcasts)
	}, [])

	const FILTERED_PODCAST = podcasts.filter(podcast => {
		const artistLabel = podcast['im:artist'].label.toLowerCase()
		const nameLabel = podcast['im:name'].label.toLowerCase()
		const searchTermLower = searchTerm.toLowerCase()

		return (
			artistLabel.includes(searchTermLower) ||
			nameLabel.includes(searchTermLower)
		)
	})

	const NO_RESULT = `Sorry at the moment we don't have the podcast ${searchTerm}, but we have other very
interesting ones.`

	return (
		<>
			<Layout>
				{FILTERED_PODCAST && (
					<div className='hoc-container'>
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<TitleSection
							title={literals.TITLE_HOME}
							quantity={FILTERED_PODCAST?.length}
						/>
						{podcasts && (
							<div className='hoc-grid-podcasts'>
								{FILTERED_PODCAST?.map(podcast => (
									<PodcastHome
										key={podcast.id.attributes['im:id']}
										podcast={podcast}
									/>
								))}
							</div>
						)}
						{FILTERED_PODCAST?.length === 0 && (
							<p className='hoc-msg-nr'>{NO_RESULT}</p>
						)}
					</div>
				)}
			</Layout>
		</>
	)
}

export default HomePage
