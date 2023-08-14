import { Link } from "react-router-dom";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from "framer-motion";
import { quick } from "../../utils/animation-transitions";


const hamburger = (props:any) => {
  const { isMobile } = props;
  const [showMenu, setShowMenu] = useState(false);


  const variants = {
    open: {
      x: 0,
      opacity: 0,
      // display: 'block',
      transition: { staggerChildren: 0.07, delayChildren: 0.2 , ...quick}
    },
    closed: {
      // display: 'none',
      opacity: 1,
      x: 550,
      transition: { staggerChildren: 0.05, staggerDirection: -1 , ...quick}
    }
  };

  return (
    <div onClick={() => {setShowMenu(!showMenu)}} className="hamburger">
      {/* Hamburger */}
      {/* Convert links to svgs and add to threeJs plane in order to do wave warp */}
      <motion.div animate={showMenu? 'open':'closed'} initial={{x:550}} variants={variants} className={`links ${isMobile ? 'mobile' : 'desktop'}`}>
        <Link to='/catalogue'>CATALOGUE</Link>
        <Link to='/about'>ABOUT</Link>
      </motion.div>
      <GiHamburgerMenu />

    </div>
  )
}

export default hamburger