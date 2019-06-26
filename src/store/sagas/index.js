import { all, takeLatest } from "redux-saga/effects";

import { Types as RankingTypes } from "../ducks/ranking";
import { Types as AuthTypes } from "../ducks/auth";
import { Types as GeneralReportsTypes } from "../ducks/generalReports";

import { getRanking } from "./ranking";
import { signIn, logout } from "./auth";
import {
  getUsers,
  getAchivements,
  getMissions,
  getXp,
  getTeams
} from "./generalReports";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, logout),
    takeLatest(RankingTypes.GET_RANKING, getRanking),
    takeLatest(GeneralReportsTypes.GET_USERS, getUsers),
    takeLatest(GeneralReportsTypes.GET_ACHIEVEMENTS, getAchivements),
    takeLatest(GeneralReportsTypes.GET_MISSIONS, getMissions),
    takeLatest(GeneralReportsTypes.GET_XP, getXp),
    takeLatest(GeneralReportsTypes.GET_TEAMS, getTeams)
  ]);
}
