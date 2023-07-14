import axios from 'axios'
import { getValidationError } from '../utilities/get-validation-error'

export const AxiosInterceptor = () => {
	const updateHeader = request => {
		const newHeaders = {
			'Content-Type': 'application/json;charset=utf-8',
		}
		request.headers = newHeaders
		return request
	}

	axios.interceptors.request.use(request => {
		if (request.url?.includes('assets')) return request
		return updateHeader(request)
	})

	axios.interceptors.response.use(
		response => {
			return response
		},
		error => {
			console.log('error', getValidationError(error.code))
			return Promise.reject(error)
		},
	)
}
