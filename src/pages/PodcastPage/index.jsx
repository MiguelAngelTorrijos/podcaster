import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'

import PodcastInfo from '../../components/PodcastInfo'
import Episode from '../../components/Episode'
import Layout from '../../components/ui/Layout'
import TitleSection from '../../components/ui/TitleSection'
import useFetchDataWithCach from '../../hooks/useFetchDataWithCache'

const PodcastPage = () => {
	const { id } = useParams()
	const [podcastDetails, setPodcastDetails] = useState([])

	const fetchPodcastsDetails = async () => {
		const allOriginsProxy = process.env.REACT_APP_ALL_SERVICE_API_URL
		const limit = 20
		const itunesURL = process.env.REACT_APP_ALL_ITUNES_API_URL
		const url = `${itunesURL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`
		const { data } = await useFetchDataWithCach(
			`${allOriginsProxy}/get?url=${encodeURIComponent(url)}`,
			`podcast_${id}`,
			24 * 60 * 60 * 1000,
		)
		setPodcastDetails(JSON.parse(data.contents))
	}

	useEffect(() => {
		fetchPodcastsDetails()
	}, [])

	return (
		<Layout>
			<div className='super-container'>
				<div className='podp-container'>
					<PodcastInfo id={id} />
					<div className='podp-list'>
						<TitleSection
							title='Episodes'
							quantity={podcastDetails.resultCount - 1}
						/>
						<Episode podcastDetails={podcastDetails.results} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PodcastPage
