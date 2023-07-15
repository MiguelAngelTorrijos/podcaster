import { useEffect } from 'react'

const useLocalStorageSetPodcast = (podcastId, data) => {
	useEffect(() => {
		const existingPodcast = localStorage.getItem(podcastId)

		if (!existingPodcast) {
			const newPodcast = { id: podcastId, data }
			localStorage.setItem(podcastId, JSON.stringify(newPodcast))
		}
	}, [podcastId, data])
}

export default useLocalStorageSetPodcast
