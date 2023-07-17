import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PodcastPage from './pages/PodcastPage'
import EpisodePage from './pages/EpisodePage'
import { AxiosInterceptor } from './interceptors/index'

AxiosInterceptor()

const router = createBrowserRouter([
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
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
