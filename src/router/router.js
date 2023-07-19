import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PodcastPage from '../pages/PodcastPage'
import EpisodePage from '../pages/EpisodePage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <HomePage />,
		exact: true,
	},
	{
		path: '/podcast/:id',
		element: <PodcastPage />,
		exact: true,
	},
	{
		path: '/podcast/:podcastId/episode/:episodeId',
		element: <EpisodePage />,
		exact: true,
	},
])
