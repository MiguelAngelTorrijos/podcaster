import { Link } from 'react-router-dom'
import './styles.scss'

import { ReactComponent as Logo } from '../../../assets/Podcaster-logo.svg'
import Loader from '../Loader/Loader'

const Header = () => {
	return (
		<div className='header'>
			<div className='he-container'>
				<Link to='/'>
					<Logo className='he-logo' />
				</Link>
				<Loader />
			</div>
		</div>
	)
}

export default Header
