import { useParams } from 'react-router-dom'
import './styles.scss'
import PodcastInfo from '../../components/PodcastInfo'

import EpisodeDetails from '../../components/EpisodeDetails'

const EpisodePage = () => {
	const { podcastId, episodeId } = useParams()

	return (
		<>
			<h1>Episode</h1>
			<PodcastInfo id={podcastId} />
			<EpisodeDetails episodeId={episodeId} podcastId={podcastId} />
		</>
	)
}

export default EpisodePage
