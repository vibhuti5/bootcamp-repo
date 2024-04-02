import { WebAuth } from 'auth0-js'

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN as string
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID as string


export const useEmbededAuth = () => {
  const webAuth = new WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    response_type: 'token id_token',
  })
  return webAuth
}
