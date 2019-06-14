import { all, takeLatest } from "redux-saga/effects";

import { Types as RankingTypes } from "../ducks/ranking";
import { getRanking } from "./ranking";

export default function* rootSaga() {
  yield all([takeLatest(RankingTypes.GET_RANKING, getRanking)]);
}
