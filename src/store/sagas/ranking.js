import { delay, call, put } from 'redux-saga/effects'
import api from '~/services/api'
import { Creators as RankingActions } from '../ducks/ranking'

export function* getRanking(action) {
  try {
    const { data } = yield call(api.get, `/ranking/${action.selected}`)

    const rankingData = {
      firstUsers: data.first_users,
      lastUsers: data.last_users,
      monthName: data.monthName,
      loading: false,
      error: '',
    }

    yield put(RankingActions.getRankingResponse(rankingData))
  } catch (error) {
    yield put(
      RankingActions.getRankingResponse({
        loading: false,
        error: error.message,
        firstUsers: [],
        lastUsers: [],
        monthName: '',
      })
    )
  }
}

export function* getRankingUsers() {
  try {
    yield delay(1000)
    // throw new Error("Servidor indisponivel");
    const data = [
      {
        name: 'Julio Goncalves',
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ['atari', 'flamengo', 'Chiefs'],
        avatar:
          'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png',
      },
      {
        name: 'Julio Goncalves',
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ['atari', 'flamengo', 'Chiefs'],
        avatar:
          'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png',
      },
      {
        name: 'Julio Goncalves',
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ['atari', 'flamengo', 'Chiefs'],
        avatar:
          'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png',
      },
      {
        name: 'Julio Goncalves',
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ['atari', 'flamengo', 'Chiefs'],
        avatar:
          'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png',
      },
      {
        name: 'Julio Goncalves',
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ['atari', 'flamengo', 'Chiefs'],
        avatar:
          'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png',
      },
    ]
    yield put(
      RankingActions.getRankingUsersResponse({
        data,
        loading: false,
        error: null,
      })
    )
  } catch (error) {
    yield put(
      RankingActions.getRankingUsersResponse({
        data: null,
        loading: false,
        error: error.message,
      })
    )
  }
}
