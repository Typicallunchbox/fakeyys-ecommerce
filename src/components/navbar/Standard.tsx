import { Link } from "wouter";

const standard = () => {
  return (
    <div className="standard">
      {/* Convert links to svgs and add to threeJs plane in order to do wave warp */}
			<Link to='/about'>ABOUT</Link>
			<Link to='/catalogue'>CATALOGUE</Link>
    </div>
  )
}

export default standard