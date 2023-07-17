import PropTypes from 'prop-types'
import './styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/Search-icon.svg'

const SearchBar = ({ setSearchTerm, searchTerm }) => {
	const handleSearchTerm = event => {
		setSearchTerm(event.target.value)
	}
	const placeHolderText = 'Search artists, podcasts...'

	return (
		<div className='sb-container'>
			<SearchIcon className='sb-icon' />
			<input
				className='sb-input'
				type='text'
				value={searchTerm}
				onChange={handleSearchTerm}
				placeholder={placeHolderText}
			/>
		</div>
	)
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
}

export default SearchBar
