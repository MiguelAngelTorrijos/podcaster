import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'
import { ReactComponent as PlayIcon } from '../../assets/play_circle_filled.svg'
import Loader from '../ui/Loader/Loader'

const Episode = ({ podcastDetails }) => {
	const episode = 'Episode'
	const date = 'Date'
	const duration = ' Duration'
	const notime = 'Not available'
	const loadingmsg = 'One moment please, searching for the episodes...'

	return (
		<>
			{podcastDetails ? (
				<>
					<div className='podp-table-titles'>
						<p>{episode}</p>
						<div className='podp-table-others'>
							<p>{date}</p>
							<p>{duration}</p>
						</div>
					</div>
					{podcastDetails.slice(1).map(episode => {
						const releaseDate = new Date(episode.releaseDate)
						const year = releaseDate.getFullYear()
						const month = releaseDate.getMonth() + 1
						const day = releaseDate.getDate()
						let formattedTime = 0
						if (episode.trackTimeMillis) {
							const totalSeconds = Math.floor(episode.trackTimeMillis / 1000)
							const hours = Math.floor(totalSeconds / 3600)
							const minutes = Math.floor((totalSeconds % 3600) / 60)
							const seconds = totalSeconds % 60

							formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
								.toString()
								.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
						} else {
							formattedTime = notime
						}

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
						<p className='podp-episode-msg-search'>{loadingmsg}</p>
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
