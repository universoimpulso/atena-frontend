import { all, takeLatest } from 'redux-saga/effects'

import { Types as AuthTypes } from '../ducks/auth'
import { Types as UserTypes } from '../ducks/user'
import { Types as RankingTypes } from '../ducks/ranking'
import { Types as GeneralReportsTypes } from '../ducks/generalReports'
import { Types as ExperienceCardTypes } from '../ducks/experienceCard'
import { Types as AchievementsTypes } from '../ducks/achievements'

import { signIn, logout, forceLogout } from './auth'
import { getProfile, getUserInfo, putUserInfo } from './user'
import { getRanking, getRankingUsers } from './ranking'
import {
  getUsers,
  getUsersAchievements,
  getMissions,
  getXp,
  getTeams
} from './generalReports'
import { getExperience, putExperience } from './experienceCard'
import {
  getAchievements,
  editAchievement,
  createAchievement
} from './achievements'

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, logout),
    takeLatest(AuthTypes.FORCE_SIGN_OUT, forceLogout),
    takeLatest(UserTypes.GET_USER_INFO, getUserInfo),
    takeLatest(UserTypes.PUT_USER_INFO, putUserInfo),
    takeLatest(UserTypes.GET_PROFILE, getProfile),
    takeLatest(RankingTypes.GET_RANKING, getRanking),
    takeLatest(RankingTypes.GET_RANKING_USERS, getRankingUsers),

    takeLatest(GeneralReportsTypes.GET_USERS, getUsers),
    takeLatest(
      GeneralReportsTypes.GET_USERS_ACHIEVEMENTS,
      getUsersAchievements
    ),
    takeLatest(GeneralReportsTypes.GET_MISSIONS, getMissions),
    takeLatest(GeneralReportsTypes.GET_XP, getXp),
    takeLatest(GeneralReportsTypes.GET_TEAMS, getTeams),
    takeLatest(ExperienceCardTypes.GET_EXPERIENCE, getExperience),
    takeLatest(ExperienceCardTypes.PUT_EXPERIENCE, putExperience),
    takeLatest(AchievementsTypes.GET_ACHIEVEMENTS, getAchievements),
    takeLatest(AchievementsTypes.EDIT_ACHIEVEMENT, editAchievement),
    takeLatest(AchievementsTypes.CREATE_ACHIEVEMENT, createAchievement)
  ])
}
