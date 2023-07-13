import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Standard from './Standard';
import Hamburger from './Hamburger';
import './style.scss';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	
	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])
	
  return (
    <div className='navbar'>
		<div className="title">
			<Link to='/'>FAKEYYS</Link>
		</div>
		{isStandard ? <Standard /> : <Hamburger />}
	</div>
  )
}

export default index