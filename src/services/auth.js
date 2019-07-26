import { decrypt } from './crypto'
import { store } from '~/store'
const TOKEN_KEY = '@at:atpin'

export const isAuthenticated = async () => {
  const token = localStorage.getItem(TOKEN_KEY)
  const data = await decrypt(token)
  return token !== null && data !== null
}

export const isCoreTeam = async () => {
  const token = localStorage.getItem(TOKEN_KEY)
  const data = await decrypt(token)
  return token !== null && data !== null && data.isCoreTeam
}

export const getToken = () => store.getState().auth.token
