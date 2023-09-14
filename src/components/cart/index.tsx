import { useState, useEffect } from 'react';
import Button from './Button';
import Window from './Window';
import { useLocation } from "react-router-dom";

import './style.scss'

const Index = () => {
	const location = useLocation();
	const [showCart, setShowCart] = useState(false);
	const [hideButton, setHideButton] = useState(false);

	useEffect(() => {
		['/'].includes(location.pathname) ? setHideButton(true) : setHideButton(false);
	}, [location])

	return (
		<>
			{!hideButton && <Button showCart={showCart} setShowCart={setShowCart}/>}
			<Window showCart={showCart} setShowCart={setShowCart}/>
		</>
	)
}

export default Index