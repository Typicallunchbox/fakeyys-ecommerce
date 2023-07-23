import { Link } from "wouter";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div onClick={() => {setShowMenu(!showMenu)}} className="hamburger">
      {/* Hamburger */}
      {/* Convert links to svgs and add to threeJs plane in order to do wave warp */}
      <GiHamburgerMenu />
      {showMenu && <div className="links">
        <Link to='/catalogue'>CATALOGUE</Link>
        <Link to='/about'>ABOUT</Link>
      </div>}
    </div>
  )
}

export default hamburger