import { useState } from 'react';
import Button from './Button';
import Window from './Window';
import './style.scss'

const Index = () => {
	const [showCart, setShowCart] = useState(false);

	return (
		<>
			<Button showCart={showCart} setShowCart={setShowCart}/>
			<Window showCart={showCart}/>
		</>
	)
}

export default Index