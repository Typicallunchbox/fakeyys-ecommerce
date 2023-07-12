import { Link } from "react-router-dom";

const standard = () => {
  return (
    <div className="standard">
			<Link to='/'>Home </Link>
			<Link to='/about'>About </Link>
			<Link to='/catalogue'>Catalogue </Link>
    </div>
  )
}

export default standard