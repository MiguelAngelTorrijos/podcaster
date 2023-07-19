export const getValidationError = errorCode => {
	const codeMatcher = {
		ERR_NETWORK: 'Network error',
		ERR_TIMEOUT: 'Timeout',
		ERR_CANCEL: 'Request canceled',
		ERR_UNKNOWN: 'Unknown error',
		ERR_400: 'Error 400',
		ERR_401: 'Error 401',
		ERR_403: 'Error 403',
		ERR_BAD_REQUEST: 'Error 404',
	}

	return codeMatcher[errorCode]
}
