import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RankingActions } from "../ducks/ranking";

export function* getRanking(action) {
  try {
    const query =
      action.payload.selected === "monthly"
        ? `/ranking-monthly`
        : "/ranking-general";

    const { data } = yield call(api.get, `api/v1${query}?format=json`);
    console.tron.log("pure", data);
    const rankingData = {
      firstUsers: data.first_users,
      lastUsers: data.last_users,
      monthName: data.monthName
    };
    yield put(RankingActions.getRankingSuccess(rankingData));
  } catch (error) {
    yield put(RankingActions.getRankingFailure(error.message));
  }
}

export function* getUserInfo() {
  try {
    yield delay(1000);
    // throw new Error("Não foi possivel buscar dados deste usuario");

    const data = {
      name: "Julio Goncalves",
      score: 1234,
      level: 5,
      generalPosition: 2,
      monthlyPosition: 4,
      availableTeams: [
        { value: "atari", label: "atari" },
        { value: "flamengo", label: "flamengo" },
        { value: "curintia", label: "curintia" },
        { value: "chiefs", label: "chiefs" },
        { value: "mengão", label: "mengão" },
        { value: "coxa", label: "coxa" }
      ],
      teams: [
        { value: "atari", label: "atari" },
        { value: "flamengo", label: "flamengo" }
      ],
      avatar:
        "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
    };
    yield put(RankingActions.getUserInfoSuccess(data));
  } catch (error) {
    yield put(RankingActions.getUserInfoFailure(error.message));
  }
}
export function* getRankingUsers() {
  try {
    yield delay(1000);
    // throw new Error("Servidor indisponivel");
    const data = [
      {
        name: "Julio Goncalves",
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ["atari", "flamengo", "Chiefs"],
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      },
      {
        name: "Julio Goncalves",
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ["atari", "flamengo", "Chiefs"],
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      },
      {
        name: "Julio Goncalves",
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ["atari", "flamengo", "Chiefs"],
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      },
      {
        name: "Julio Goncalves",
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ["atari", "flamengo", "Chiefs"],
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      },
      {
        name: "Julio Goncalves",
        xp: 1234,
        position: 4,
        level: 5,
        isCoreTeam: true,
        teams: ["atari", "flamengo", "Chiefs"],
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      }
    ];
    yield put(RankingActions.getRankingUsersSuccess(data));
  } catch (error) {
    yield put(RankingActions.getRankingUsersFailure(error.message));
  }
}
