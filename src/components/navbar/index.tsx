import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Standard from './Standard';
import Hamburger from './Hamburger';
import './style.scss';

const index = () => {
	const location = useLocation();
	const [isStandard, setIsStandard] = useState(false);
	
	useEffect(() => {
		['/','/about'].includes(location.pathname) ? setIsStandard(true) : setIsStandard(false);
	}, [location])
	
  return (
    <div className='navbar'>
		{isStandard ? <Standard /> : <Hamburger />}
	</div>
  )
}

export default index