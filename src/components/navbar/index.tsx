import './style.scss';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Standard from './Standard';
import Hamburger from './Hamburger';
import { motion } from "framer-motion";
import { useDeviceContext } from '../../contexts/device-context';
import { useProductContext } from '../../contexts/product-context';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const { isMobile } = useDeviceContext();
	const { viewProduct } = useProductContext();
	 const variants = {
		show: {opacity: 1, pointerEvents: 'all', transition: {duration: 0.5}},
		hide: {opacity: 0, pointerEvents: 'none', transition: {duration: 0.5}}
	};
	
	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])
	
	return (
		<motion.nav variants={variants} animate={viewProduct ? 'hide' : 'show'} className={`navbar ${isMobile ? 'mobile' : ''}`}>
			<motion.div className="title">
				<Link to='/'>FAKEYYS</Link>
			</motion.div>
			{isStandard && !isMobile ? <Standard /> : <Hamburger />}
		</motion.nav>
	)
}

export default index