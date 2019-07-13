import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RankingActions } from "../ducks/ranking";

export function* getRanking(action) {
  try {
    yield delay(1000);
    const query =
      action.payload.selected === "monthly"
        ? `/ranking-monthly`
        : "/ranking-general";

    const { data } = yield call(api.get, `api/v1${query}?format=json`);

    const rankingData = {
      firstUsers: data.first_users,
      lastUsers: data.last_users,
      monthName: data.monthName,
      error: data.error
    };
    yield put(RankingActions.getRankingSuccess(rankingData));
  } catch (error) {
    yield put(RankingActions.getRankingFailure("Erro ao buscar ranking"));
  }
}

export function* getUserInfo() {
  try {
    const data = {
      name: "Julio Goncalves",
      score: 1234,
      level: 5,
      generalPosition: 2,
      monthlyPosition: 4
    };
    yield put(RankingActions.getUserInfoSuccess(data));
  } catch (error) {
    yield put(RankingActions.getUserInfoFailure("Erro ao buscar ranking"));
  }
}
