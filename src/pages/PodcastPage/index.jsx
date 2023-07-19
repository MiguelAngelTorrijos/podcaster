import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'

import PodcastInfo from '../../components/PodcastInfo'
import Episode from '../../components/Episode'
import Layout from '../../components/ui/Layout'
import TitleSection from '../../components/ui/TitleSection'
import { scrollTop } from '../../utilities/scrollTop'
import { literals } from '../../constants/literals'
import { fetchPodcastsDetails } from '../../services/fetchPodcastsDetails'

const PodcastPage = () => {
	const { id } = useParams()
	const [podcastDetails, setPodcastDetails] = useState([])
	const [idPodcast, setIdPodcast] = useState(null)

	useEffect(() => {
		scrollTop()
	}, [])

	useEffect(() => {
		fetchPodcastsDetails(id, setPodcastDetails)
	}, [])

	useEffect(() => {
		if (podcastDetails.results) {
			setIdPodcast(
				podcastDetails.results.find(
					result => result.wrapperType === literals.WRAPPER_TIPE,
				).collectionId,
			)
		}
	}, [podcastDetails.results])

	const idPodcstStr = String(idPodcast)
	const quantityPodcasts = podcastDetails.resultCount - 1

	return (
		<Layout>
			<div className='super-container'>
				<div className='podp-container'>
					{idPodcast && <PodcastInfo id={idPodcstStr} />}
					<div className='podp-list'>
						<TitleSection
							title={literals.PODCAST_PAGE_TITLE}
							quantity={quantityPodcasts}
						/>
						<Episode podcastDetails={podcastDetails.results} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PodcastPage
