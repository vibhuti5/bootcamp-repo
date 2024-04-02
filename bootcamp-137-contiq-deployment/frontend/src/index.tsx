import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import AuthContextProvider from './context/AuthContext'
import { FetchfilesProvider } from './context/FetchContext'
import FileContextProvider from './context/FileContext'
import theme from './theme'
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <FileContextProvider>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
          authorizationParams={{
            redirect_uri: window.location.origin + '/home',
          }}
        >
          <FetchfilesProvider>
            <App />
          </FetchfilesProvider>
        </Auth0Provider>
      </FileContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
)
