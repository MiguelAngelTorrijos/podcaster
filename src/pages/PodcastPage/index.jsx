import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'

import { getPodcastDetails } from '../../services'
import PodcastInfo from '../../components/PodcastInfo'
import Episode from '../../components/Episode'

const PodcastPage = () => {
	const { id } = useParams()
	const [podcastDetails, setPodcastDetails] = useState([])

	const fetchPodcastsDetails = async () => {
		const limitPodcastsDetails = 20
		const { data } = await getPodcastDetails(limitPodcastsDetails, id)
		const tempResults = JSON.parse(data.contents)
		setPodcastDetails(tempResults.results)
	}

	useEffect(() => {
		fetchPodcastsDetails()
	}, [])
	return (
		<>
			<PodcastInfo id={id} />
			<Episode podcastDetails={podcastDetails} />
		</>
	)
}

export default PodcastPage
