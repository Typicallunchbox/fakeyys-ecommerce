import Button from './Button';
import Window from './Window';
import { motion } from "framer-motion";
import './style.scss'

const Index = () => {
	return (
		<motion.div className='cart'>
			<Button />
			<Window />
		</motion.div>
	)
}

export default Index