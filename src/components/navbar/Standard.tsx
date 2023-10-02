import { Link } from "react-router-dom";

const standard = () => {
  return (
    <div className="standard">
			<Link to='/about'>ABOUT</Link>
			<Link to='/catalogue'>CATALOGUE</Link>
    </div>
  )
}

export default standard