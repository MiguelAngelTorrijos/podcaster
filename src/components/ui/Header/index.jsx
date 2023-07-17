import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { ReactComponent as Logo } from '../../../assets/Podcaster-logo.svg'
import Loader from '../Loader/Loader'

const Header = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div className='header'>
			<div className='he-container'>
				<Link to='/'>
					<Logo className='he-logo' />
				</Link>

				{isLoading && <Loader />}
			</div>
		</div>
	)
}

export default Header
