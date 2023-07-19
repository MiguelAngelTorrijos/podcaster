import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'
import { ReactComponent as PlayIcon } from '../../assets/play_circle_filled.svg'
import Loader from '../ui/Loader/Loader'
import { literals } from '../../constants/literals'
import { formatTime } from '../../utilities/formatTime'

const Episode = ({ podcastDetails }) => {
	return (
		<>
			{podcastDetails ? (
				<>
					<div className='podp-table-titles'>
						<p>{literals.EPISODE_TEXT}</p>
						<div className='podp-table-others'>
							<p>{literals.DATE_TEXT}</p>
							<p>{literals.DURATION_TEXT}</p>
						</div>
					</div>
					{podcastDetails.slice(1).map(episode => {
						const { year, month, day, formattedTime } = formatTime(episode)

						return (
							<div className='podp-episode-container' key={episode.trackId}>
								<div className='podp-episode-title'>
									<PlayIcon />
									<Link
										className='podp-episode-text'
										to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
									>
										{episode.trackName}
									</Link>
								</div>
								<div className='podp-episode-other-details'>
									<p className='podp-episode-date'>{`${day}/${month}/${year}`}</p>
									<p className='podp-episode-time'>{formattedTime}</p>
								</div>
							</div>
						)
					})}
				</>
			) : (
				<>
					<div className='podp-loader-container'>
						<p className='podp-episode-msg-search'>{literals.LOADING_MSG}</p>
						<div className='podp-loader'>
							<Loader />
						</div>
					</div>
				</>
			)}
		</>
	)
}

Episode.propTypes = {
	podcastDetails: PropTypes.array,
}

export default Episode
