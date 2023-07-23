import { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";
import Standard from './Standard';
import Hamburger from './Hamburger';
import './style.scss';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		['/','/about'].includes(location[0]) ? setIsStandard(true) : setIsStandard(false);
	}, [location])

	useEffect(() => {
		if (isMobile && window.innerWidth >= 992) setIsMobile(false);
        else if (!isMobile && window.innerWidth <= 991) setIsMobile(true);
	}, [])

	window.addEventListener("resize", function(){
        if (isMobile && window.innerWidth >= 992) setIsMobile(false);
        else if (!isMobile && window.innerWidth <= 991) setIsMobile(true);
	});
	  
	
	return (
		<div className='navbar'>
			<div className="title">
				<Link to='/'>FAKEYYS</Link>
			</div>
			{isStandard && !isMobile ? <Standard /> : <Hamburger />}
		</div>
	)
}

export default index