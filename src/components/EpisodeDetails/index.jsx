import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Linkify from 'react-linkify'

const EpisodeDetails = ({ podcastId, episodeId }) => {
	const [episodeDetails, setEpisodeDetails] = useState({})

	const [localStorageData, setLocalStorageData] = useState({})

	useEffect(() => {
		const storedData = localStorage.getItem('PodcastDetails' + podcastId)

		if (storedData) {
			const parsedData = JSON.parse(storedData)
			setLocalStorageData(parsedData)
		}
	}, [])

	useEffect(() => {
		if (localStorageData.podcastDetails) {
			const episodesArr = Object.entries(localStorageData?.podcastDetails).map(
				([key, value]) => ({
					key,
					value,
				}),
			)
			setEpisodeDetails(
				episodesArr.find(
					episode => episode.value.trackId === Number(episodeId),
				),
			)
		}
	}, [localStorageData.podcastDetails])
	return (
		<>
			{episodeDetails.value && (
				<>
					<div>
						<h1>{episodeDetails.value.trackName}</h1>
						<Linkify>
							<p>{episodeDetails.value.description}</p>
						</Linkify>
						<audio controls>
							<source src={episodeDetails.value.previewUrl} type='audio/mp3' />
						</audio>
					</div>
				</>
			)}
		</>
	)
}

EpisodeDetails.propTypes = {
	podcastId: PropTypes.string,
	episodeId: PropTypes.string,
}

export default EpisodeDetails
