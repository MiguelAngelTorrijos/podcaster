import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
		<>
			<Link to='/'>Podcaster Logo</Link>
			{isLoading && <p>cargando</p>}
		</>
	)
}

export default Header
