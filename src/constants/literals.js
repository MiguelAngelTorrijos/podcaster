export const literals = {
	// Time cache
	TWENTY_FOUR_HOURS: 24 * 60 * 60 * 1000,
	// PodcastInfo component
	DESCRIPTION_TEXT: 'Description',
	// SearchBar component
	PLACEHOLDER_TEXT: 'Search artists, podcasts...',
	// Episode component
	EPISODE_TEXT: 'Epidode',
	DATE_TEXT: 'Date',
	DURATION_TEXT: 'Duration',
	NO_TIME_TEXT: 'Not available',
	LOADING_MSG: 'One moment please, searching for the episodes...',
	// FetchPodcastDetailsService
	ALL_ORIGINS_PROXY: process.env.REACT_APP_ALL_SERVICE_API_URL,
	LIMIT_PODCASTS_DETAILS: 20,
	ITUNES_URL: process.env.REACT_APP_ALL_ITUNES_API_URL,
	// PodcastPage component
	PODCAST_PAGE_TITLE: 'Descriptions',
	WRAPPER_TIPE: 'track',
	// HomePageComponent
	LIMIT_PODCASTS_HOME: 100,
	TITLE_HOME: 'All Podcasts',
	ARTIST_LABEL: 'im:artist',
	NAME_LABEL: 'im:name',
	// Api errors
	ERROR_FETCHING_ALL: 'Error fetching podcasts.',
	ERROR_FETCHING_DETAILS: 'Error fetching podcast details.',
	ERROR_FETCHING_CATCH: 'Error when fetching data:',
}
