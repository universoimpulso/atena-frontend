import { delay, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../services/api'
import history from '../../services/history'
import { encrypt, decrypt } from '../../services/crypto'

import { Creators as AuthActions } from '../ducks/auth'

export function* signIn({ data }) {
  try {
    const { rocketId, password, code } = data
    let response
    if (code) {
      response = yield call(api.post, 'auth/linkedin', { code })
    } else if (rocketId && password) {
      const data = yield call(encrypt, { user: rocketId, password })
      response = yield call(api.post, 'auth', { data })
    }
    const { uuid, isCoreTeam, avatar } = yield call(
      decrypt,
      response.data.token
    )

    yield put(
      AuthActions.signInSuccess({
        token: response.data.token,
        isCoreTeam,
        avatar: avatar,
        uuid
      })
    )
    yield history.push('/userInfo')
  } catch (err) {
    toast.error(`Não foi possível completar o login:
    ${err.message}`)
    yield put(AuthActions.signInFailure(err))
  }
}

export function logout() {
  history.push('/')
}

export function* forceLogout() {
  toast.warn(`Voce será direcionado em 3 segundos`)
  yield delay(3000)
  yield put(AuthActions.signOut())

  history.push('/')
}
