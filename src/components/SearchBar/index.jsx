import PropTypes from 'prop-types'

const SearchBar = ({ setSearchTerm, searchTerm }) => {
	const handleSearchTerm = event => {
		setSearchTerm(event.target.value)
	}

	return (
		<input
			type='text'
			value={searchTerm}
			onChange={handleSearchTerm}
			placeholder='Search...'
		/>
	)
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
}

export default SearchBar
