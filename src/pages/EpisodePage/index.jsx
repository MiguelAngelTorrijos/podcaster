import { useParams } from 'react-router-dom'
import './styles.scss'
import PodcastInfo from '../../components/PodcastInfo'

import EpisodeDetails from '../../components/EpisodeDetails'
import Layout from '../../components/ui/Layout'

const EpisodePage = () => {
	const { podcastId, episodeId } = useParams()

	return (
		<Layout>
			<h1>Episode</h1>
			<PodcastInfo id={podcastId} />
			<EpisodeDetails episodeId={episodeId} podcastId={podcastId} />
		</Layout>
	)
}

export default EpisodePage
