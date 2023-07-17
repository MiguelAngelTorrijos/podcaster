import { useParams } from 'react-router-dom'
import './styles.scss'
import PodcastInfo from '../../components/PodcastInfo'

import EpisodeDetails from '../../components/EpisodeDetails'
import Layout from '../../components/ui/Layout'
import { useEffect } from 'react'
import { scrollTop } from '../../utilities/scrollTop'

const EpisodePage = () => {
	const { podcastId, episodeId } = useParams()
	useEffect(() => {
		scrollTop()
	}, [])

	return (
		<Layout>
			<div className='super-container'>
				<div className='episode-container'>
					<div className='episode-container'>
						<PodcastInfo id={podcastId} />
						<EpisodeDetails episodeId={episodeId} podcastId={podcastId} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default EpisodePage
