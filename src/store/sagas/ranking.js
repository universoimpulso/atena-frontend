import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RankingActions } from "../ducks/ranking";

export function* getRanking(action) {
  try {
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
    yield put(RankingActions.getRankingSucess(rankingData));
  } catch (error) {
    yield put(RankingActions.getRankingFailure("Erro ao buscar ranking"));
  }
}
