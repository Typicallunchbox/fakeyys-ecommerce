import { Link } from "react-router-dom";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from "framer-motion";
import { quick } from "../../utils/animation-transitions";
import { useDeviceContext } from "../../contexts/device-context";


const hamburger = (props:any) => {
	const { isMobile } = useDeviceContext();
  const [showMenu, setShowMenu] = useState(false);


  const variants = {
    open: {
      x: 0,
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 , ...quick}
    },
    closed: {
      x: 550,
      y: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 , ...quick}
    },
    openMobile: {
      y: 0,
      x:0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 , ...quick}
    },
    closedMobile: {
      x:0,
      y: -290,
      transition: { staggerChildren: 0.05, staggerDirection: -1 , ...quick}
    }
  };

  const animateForDevice = () => {
    if(isMobile){
      return showMenu ? 'openMobile' : 'closedMobile';
    }
      return showMenu ? 'open' : 'closed';
  }

  return (
    <div onClick={() => {setShowMenu(!showMenu)}} className="hamburger">
      {/* Hamburger */}
      {/* Convert links to svgs and add to threeJs plane in order to do wave warp */}
      <motion.div animate={animateForDevice()} initial={{x:1000, y:-550}} exit={isMobile ?{x:0, y:-290}:{x:550, y:0}} variants={variants} className={`links ${isMobile ? 'mobile' : 'desktop'}`}>
        <Link to='/catalogue'>CATALOGUE</Link>
        <Link to='/about'>ABOUT</Link>
      </motion.div>
      <GiHamburgerMenu />
    </div>
  )
}

export default hamburger