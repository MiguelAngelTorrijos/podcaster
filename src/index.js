import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PodcastPage from './pages/PodcastPage'
import EpisodePage from './pages/EpisodePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <HomePage />,
	},
	{
		path: '/podcast/:id',
		element: <PodcastPage />,
	},
	{
		path: '/podcast/:podcastId/episode/:episodeId',
		element: <EpisodePage />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
