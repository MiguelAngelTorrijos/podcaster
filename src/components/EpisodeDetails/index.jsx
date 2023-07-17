import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import Linkify from 'react-linkify'

const EpisodeDetails = ({ podcastId, episodeId }) => {
	const [episodeDetails, setEpisodeDetails] = useState({})
	const [localStorageData, setLocalStorageData] = useState({})

	useEffect(() => {
		const storedData = localStorage.getItem('podcast_' + podcastId)
		if (storedData) {
			const parsedData = JSON.parse(storedData)
			setLocalStorageData(JSON.parse(parsedData.data.contents).results)
		}
	}, [])

	useEffect(() => {
		if (localStorageData.length > 0) {
			const episodesArr = Object.entries(localStorageData).map(
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
	}, [localStorageData.length > 0])

	return (
		<>
			{episodeDetails.value && (
				<>
					<div className='eps-container'>
						<h1 className='eps-title'>{episodeDetails.value.trackName}</h1>
						<Linkify>
							<p className='eps-description'>
								{episodeDetails.value.description}
							</p>
						</Linkify>
						<div className='eps-audio-container'>
							<audio controls>
								<source
									src={episodeDetails.value.previewUrl}
									type='audio/mp3'
								/>
							</audio>
						</div>
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
