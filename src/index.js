import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import { AxiosInterceptor } from './interceptors/index'
import { router } from './router/router'

AxiosInterceptor()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
