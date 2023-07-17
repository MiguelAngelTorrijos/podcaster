import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'

const PodcastInfo = ({ id }) => {
	const [localStorageData, setLocalStorageData] = useState(null)

	useEffect(() => {
		const storedData = localStorage.getItem('details_podcast_' + id)

		if (storedData) {
			const parsedData = JSON.parse(storedData)
			setLocalStorageData(parsedData.data.podcast)
		}
	}, [])

	return (
		<>
			{localStorageData && (
				<div className='pod-info-container'>
					<img
						className='pod-info-img'
						src={localStorageData['im:image'][2].label}
						alt={localStorageData['im:name'].label + ' image'}
					/>
					<div className='pod-info-text-container'>
						<Link
							className='pod-info-artist'
							to={`/podcast/${localStorageData.id.attributes['im:id']}`}
						>
							{localStorageData['im:artist'].label}
						</Link>
						<br />
						<Link
							className='pod-info-name'
							to={`/podcast/${localStorageData.id.attributes['im:id']}`}
						>
							{localStorageData['im:name'].label}
						</Link>
						<div className='pod-info-description'>
							<span>Description</span>
							<p>{localStorageData.summary.label}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

PodcastInfo.propTypes = {
	id: PropTypes.string,
}

export default PodcastInfo
