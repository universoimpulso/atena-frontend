import { delay, call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as UserActions } from '../ducks/user'

export function* getProfile(action) {
  try {
    const { data } = yield call(api.get, `users/${action.data}/profile`)
    const userAchievementsModel = [
      {
        name: 'Network Rocketchat',
        achievements: [
          {
            type: 'network.message.sended',
            name: 'Network | Mensagens Enviadas',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'network.reaction.sended',
            name: 'Network | Reações Enviadas',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'network.reaction.received',
            name: 'Network | Reações Recebidas',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          }
        ]
      },
      {
        name: 'Projetos Github',
        achievements: [
          {
            type: 'issueCreated',
            name: 'Github | Issue Criada',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'pullRequestApproved',
            name: 'Github | Pull Request Aprovadas',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'pullRequestCreated',
            name: 'Github | Pull Request Criadas',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'review',
            name: 'Github | Reviews Feitos',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          }
        ]
      },
      {
        name: 'Blog Impulso',
        achievements: [
          {
            type: 'comments',
            name: 'Blog | Comentários',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          },
          {
            type: 'posts',
            name: 'Blog | Postagens',
            medal: 0,
            tier: 0,
            maxScore: 1,
            score: 0
          }
        ]
      }
    ]
    const medalModel = {
      Bronze: 0,
      Prata: 1,
      Ouro: 2,
      Platina: 3,
      Diamante: 4
    }
    const tierModel = {
      I: 0,
      II: 1,
      III: 2,
      IV: 3,
      V: 4
    }
    userAchievementsModel.forEach(modelValues => {
      modelValues.achievements.forEach(modelAchievements => {
        data.userAchievements.forEach(newValues => {
          newValues.achievements.forEach(newAchievements => {
            if (modelAchievements.type === newAchievements.type) {
              modelAchievements.medal = medalModel[newAchievements.medal]
              modelAchievements.tier = tierModel[newAchievements.tier]
              modelAchievements.maxScore = newAchievements.maxScore
              modelAchievements.score = newAchievements.score
            }
          })
        })
      })
    })

    yield put(
      UserActions.getProfileResponse({
        loading: false,
        error: '',
        userInfo: {
          name: data.name,
          avatar: data.avatar || '',
          level: data.level,
          score: data.score,
          generalPosition: data.generalPosition,
          monthlyPosition: data.monthlyPosition
        },
        userAchievements: userAchievementsModel
      })
    )
  } catch (error) {
    const { data } = error.response
    yield put(
      UserActions.getProfileResponse({
        userInfo: {},
        userAchievements: [],
        loading: false,
        error: data.message || error.message,
        errorType: data.type
      })
    )
  }
}
export function* getUserInfo() {
  try {
    yield delay(1000)
    const mock = {
      medal: 'Bronze',
      tier: 'I',
      name: 'Julio Goncalves',
      id: '1234567',
      score: 1234,
      level: 5,
      generalPosition: 2,
      monthlyPosition: 4,
      availableTeams: [
        { value: 'atari', label: 'atari' },
        { value: 'flamengo', label: 'flamengo' },
        { value: 'curintia', label: 'curintia' },
        { value: 'chiefs', label: 'chiefs' },
        { value: 'mengão', label: 'mengão' },
        { value: 'coxa', label: 'coxa' }
      ],
      teams: [
        { value: 'atari', label: 'atari' },
        { value: 'flamengo', label: 'flamengo' }
      ],
      avatar:
        'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png'
    }
    yield put(
      UserActions.getUserInfoResponse({
        data: mock,
        loading: false,
        error: null
      })
    )
  } catch (error) {
    yield put(
      UserActions.getUserInfoResponse({
        data: null,
        loading: false,
        error: error.message
      })
    )
  }
}
export function* putUserInfo() {
  try {
    yield delay(1000)
    const user = {
      name: 'Julio Goncalves',
      id: '1234567',
      score: 1234,
      level: 5,
      generalPosition: 2,
      monthlyPosition: 4,
      availableTeams: [
        { value: 'atari', label: 'atari' },
        { value: 'flamengo', label: 'flamengo' },
        { value: 'curintia', label: 'curintia' },
        { value: 'chiefs', label: 'chiefs' },
        { value: 'mengão', label: 'mengão' },
        { value: 'coxa', label: 'coxa' }
      ],
      teams: [
        { value: 'atari', label: 'atari' },
        { value: 'flamengo', label: 'flamengo' }
      ],
      avatar:
        'https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png'
    }
    yield put(
      UserActions.getUserInfoResponse({ user, loading: false, error: null })
    )
  } catch (error) {
    yield put(
      UserActions.getUserInfoResponse({
        data: null,
        loading: false,
        error: error.message
      })
    )
  }
}
