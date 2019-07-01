import { all, takeLatest } from "redux-saga/effects";

import { Types as RankingTypes } from "../ducks/ranking";
import { Types as AuthTypes } from "../ducks/auth";
import { Types as GeneralReportsTypes } from "../ducks/generalReports";
import { Types as ExperienceCardTypes } from "../ducks/experienceCard";
import { Types as EditAchievementsTypes } from "../ducks/editAchievements";

import { getRanking } from "./ranking";
import { signIn, logout } from "./auth";
import {
  getUsers,
  getUsersAchievements,
  getMissions,
  getXp,
  getTeams
} from "./generalReports";
import { getExperience, putExperience } from "./experienceCard";
import { getAchievements, putAchievements } from "./editAchievements";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, logout),
    takeLatest(RankingTypes.GET_RANKING, getRanking),
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
    takeLatest(EditAchievementsTypes.GET_ACHIEVEMENTS, getAchievements),
    takeLatest(EditAchievementsTypes.PUT_ACHIEVEMENTS, putAchievements)
  ]);
}
