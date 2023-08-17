import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Standard from './Standard';
import Hamburger from './Hamburger';
import { Example } from '../navbarDemo/Example';
import './style.scss';
import { useDeviceContext } from '../../contexts/device-context';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const { isMobile } = useDeviceContext();
	
	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])
	
	return (
		<nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
			<div className="title">
				<Link to='/'>FAKEYYS</Link>
			</div>
			{/* {isStandard && !isMobile ? <Standard /> : <Example />} */}
			{isStandard && !isMobile ? <Standard /> : <Hamburger isMobile={isMobile}/>}
		</nav>
	)
}

export default index