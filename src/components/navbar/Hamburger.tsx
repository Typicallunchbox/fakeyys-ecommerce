import { Link } from "react-router-dom";
import { useState } from 'react';

const hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div onClick={() => {setShowMenu(!showMenu)}} className="hamburger">
      Hamburger
      {showMenu && <div className="links">
        <Link to='/catalogue'>CATALOGUE</Link>
        <Link to='/about'>ABOUT</Link>
      </div>}
    </div>
  )
}

export default hamburger