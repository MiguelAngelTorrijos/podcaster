import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'

import { infoCachedData } from '../../utilities/getInfoCacheData'
import { literals } from '../../constants/literals'

const PodcastHome = props => {
	const handleDataInfo = () => {
		const data = props
		const maxAge = literals.DESCRIPTION_TEXT
		const cacheKey = 'details_podcast_' + props.podcast.id.attributes['im:id']
		infoCachedData(maxAge, cacheKey, data)
	}

	return (
		<div className='phc-container'>
			<Link
				onClick={handleDataInfo}
				to={`/podcast/${props.podcast.id.attributes['im:id']}`}
			>
				<img
					className='phc-image'
					src={props.podcast['im:image'][2].label}
					alt={props.podcast['im:name'].label + ' image'}
				/>
			</Link>
			<Link
				className='phc-name'
				onClick={handleDataInfo}
				to={`/podcast/${props.podcast.id.attributes['im:id']}`}
			>
				{props.podcast['im:name'].label}
			</Link>
			<Link
				className='phc-artist'
				onClick={handleDataInfo}
				to={`/podcast/${props.podcast.id.attributes['im:id']}`}
			>
				{props.podcast['im:artist'].label}
			</Link>
		</div>
	)
}

PodcastHome.propTypes = {
	podcast: PropTypes.object,
}

export default PodcastHome
