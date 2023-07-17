import { useParams } from 'react-router-dom'
import './styles.scss'
import PodcastInfo from '../../components/PodcastInfo'

import EpisodeDetails from '../../components/EpisodeDetails'
import Layout from '../../components/ui/Layout'

const EpisodePage = () => {
	const { podcastId, episodeId } = useParams()

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
