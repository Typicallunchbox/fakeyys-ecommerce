import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDeviceContext } from '../../contexts/device-context';
import { useProductContext } from '../../contexts/product-context';
import Hamburger from './Hamburger';
import Standard from './Standard';
import './style.scss';

const Index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	const { isMobile } = useDeviceContext();
	const { viewProduct } = useProductContext();

	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])
	
	return (
		<motion.nav  className={`navbar ${isMobile ? 'mobile' : ''}`}>
			<motion.div className="title">
				<motion.div initial={{opacity:1}} animate={viewProduct ? {opacity: 0}:{opacity: 1}}><Link to='/'>FAKEYYS</Link></motion.div>
			</motion.div>
			{isStandard && !isMobile ? <Standard /> : <Hamburger />}
		</motion.nav>
	)
}

export default Index