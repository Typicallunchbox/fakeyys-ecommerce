import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Standard from './Standard';
import Hamburger from './Hamburger';
import { Example } from '../navbarDemo/Example';
import { getDeviceType } from '../../utils/device-size';

import './style.scss';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	
	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])

	useEffect(() => {
		setIsMobile(getDeviceType());
	}, [])

	onresize = () => { setIsMobile(getDeviceType());}
	
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