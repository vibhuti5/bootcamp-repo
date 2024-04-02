import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404-Page Not Found</h1>
      <p>
        The page you are looking for does not exist or{' '}
        <Link to={'/sign-in'}>Login</Link> to find the page.
      </p>
    </div>
  )
}
export default NotFound
