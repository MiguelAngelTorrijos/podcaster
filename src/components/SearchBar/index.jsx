import PropTypes from 'prop-types'
import './styles.scss'

const SearchBar = ({ setSearchTerm, searchTerm }) => {
	const handleSearchTerm = event => {
		setSearchTerm(event.target.value)
	}

	return (
		<input
			className='sb-input'
			type='text'
			value={searchTerm}
			onChange={handleSearchTerm}
			placeholder='Search artists, podcasts...'
		/>
	)
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
}

export default SearchBar
