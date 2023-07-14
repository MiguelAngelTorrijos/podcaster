import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PodcastHome = props => {
	const handleStoragePodcast = () => {
		const podcastId = props.podcast.id.attributes['im:id']
		const data = props.podcast

		const existingPodcast = localStorage.getItem(podcastId)

		if (!existingPodcast) {
			const newPodcast = { id: podcastId, data }
			localStorage.setItem(podcastId, JSON.stringify(newPodcast))
		}
	}

	return (
		<>
			<img
				src={props.podcast['im:image'][0].label}
				alt={props.podcast['im:name'].label + ' image'}
			/>
			<Link
				onClick={handleStoragePodcast}
				to={`/podcast/${props.podcast.id.attributes['im:id']}`}
			>
				{props.podcast['im:artist'].label}
			</Link>
			<br />
			<Link
				onClick={handleStoragePodcast}
				to={`/podcast/${props.podcast.id.attributes['im:id']}`}
			>
				{props.podcast['im:name'].label}
			</Link>
			<br />
			<br />
		</>
	)
}

PodcastHome.propTypes = {
	podcast: PropTypes.object,
}

export default PodcastHome
