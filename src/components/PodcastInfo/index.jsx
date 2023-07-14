import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PodcastInfo = ({ id }) => {
	const [localStorageData, setLocalStorageData] = useState(null)

	useEffect(() => {
		const storedData = localStorage.getItem(id)

		if (storedData) {
			const parsedData = JSON.parse(storedData)
			setLocalStorageData(parsedData)
		}
	}, [])

	return (
		<>
			{localStorageData && (
				<div>
					<img
						src={localStorageData.data['im:image'][0].label}
						alt={localStorageData.data['im:name'].label + ' image'}
					/>
					<Link to={`/podcast/${localStorageData.id}`}>
						{localStorageData.data['im:artist'].label}
					</Link>
					<br />
					<Link to={`/podcast/${localStorageData.id}`}>
						{localStorageData.data['im:name'].label}
					</Link>
					<span>Description</span>
					<p>{localStorageData.data.summary.label}</p>
				</div>
			)}
		</>
	)
}

PodcastInfo.propTypes = {
	id: PropTypes.string,
}

export default PodcastInfo
