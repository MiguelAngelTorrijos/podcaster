import PropTypes from 'prop-types'
import './styles.scss'

import Header from '../Header'

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<div>
				<Header />
			</div>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
