import PropTypes from 'prop-types'
import './styles.scss'

const TitleSection = ({ title, quantity }) => {
	const quantityNumb = quantity > 0 ? quantity : 0

	return (
		<div className='ts-title'>
			<p className='ts-text'>{title}</p>
			<p className='ts-quantity'>{quantityNumb}</p>
		</div>
	)
}
TitleSection.propTypes = {
	title: PropTypes.string,
	quantity: PropTypes.number,
}

export default TitleSection
