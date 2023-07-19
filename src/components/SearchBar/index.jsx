import PropTypes from 'prop-types'
import './styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/Search-icon.svg'
import { literals } from '../../constants/literals'

const SearchBar = ({ setSearchTerm, searchTerm }) => {
	const handleSearchTerm = event => {
		setSearchTerm(event.target.value)
	}

	return (
		<div className='sb-container'>
			<SearchIcon className='sb-icon' />
			<input
				className='sb-input'
				type='text'
				value={searchTerm}
				onChange={handleSearchTerm}
				placeholder={literals.PLACEHOLDER_TEXT}
			/>
		</div>
	)
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
}

export default SearchBar
