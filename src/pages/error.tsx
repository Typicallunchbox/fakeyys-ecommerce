import { Link } from "react-router-dom"

const error = () => {
  return (
    <div className="page error">
      <div className="error-container">
        <div className="image-container">
          <div className="title" aria-hidden="true">404</div>
          <img className="image" src="/images/error404.jpg"/>
          <h1 className="title stroked-title">404</h1>
        </div>
        <h3>Page not found</h3>
        <Link to='/'>BACK TO HOMEPAGE</Link>
      </div>

    </div>
  )
}

export default error