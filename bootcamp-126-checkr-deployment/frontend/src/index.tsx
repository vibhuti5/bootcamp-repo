import ReactDOM from 'react-dom'
import { App } from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
    authorizationParams={{
      redirect_uri: window.location.origin + '/dashboard',
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
