import PropTypes from 'prop-types'
import './styles.scss'

const TitleSection = ({ title, quantity }) => {
	return (
		<div className='ts-title'>
			<p className='ts-text'>{title}</p>

			{quantity > 0 ? (
				<p className='ts-quantity'>{quantity}</p>
			) : (
				<p className='ts-quantity'>0</p>
			)}
		</div>
	)
}
TitleSection.propTypes = {
	title: PropTypes.string,
	quantity: PropTypes.number,
}

export default TitleSection
