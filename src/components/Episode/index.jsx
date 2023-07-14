import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const Episode = ({ podcastDetails }) => {
	const { id } = useParams()

	const handleStoragePodcast = () => {
		const podcastId = 'PodcastDetails' + id
		const existingPodcast = localStorage.getItem(podcastId)
		if (!existingPodcast) {
			const newPodcast = { id: podcastId, podcastDetails }
			localStorage.setItem(podcastId, JSON.stringify(newPodcast))
		}
	}

	return (
		<>
			{podcastDetails &&
				podcastDetails.slice(1).map(episode => {
					const releaseDate = new Date(episode.releaseDate)
					const year = releaseDate.getFullYear()
					const month = releaseDate.getMonth() + 1
					const day = releaseDate.getDate()

					const totalSeconds = Math.floor(episode.trackTimeMillis / 1000)
					const hours = Math.floor(totalSeconds / 3600)
					const minutes = Math.floor((totalSeconds % 3600) / 60)
					const seconds = totalSeconds % 60

					const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
						.toString()
						.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

					return (
						<div key={episode.trackId}>
							<Link
								onClick={handleStoragePodcast}
								to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
							>
								{episode.trackName}
							</Link>
							<p>{`${day}/${month}/${year}`}</p>
							<p>{formattedTime}</p>
						</div>
					)
				})}
		</>
	)
}

Episode.propTypes = {
	podcastDetails: PropTypes.array,
}

export default Episode
