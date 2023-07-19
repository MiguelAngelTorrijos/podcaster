import { literals } from '../constants/literals'

export const formatTime = episode => {
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
		formattedTime = literals.NO_TIME_TEXT
	}

	return { year, month, day, formattedTime }
}
