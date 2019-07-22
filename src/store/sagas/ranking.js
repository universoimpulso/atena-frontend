import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RankingActions } from "../ducks/ranking";

export function* getRanking(action) {
  try {
    // const query = action.selected === "monthly" ? `monthly` : "general";

    // const { data } = yield call(api.get, `/ranking/${query}`);
    // console.log(data);
    // const rankingData = {
    //   firstUsers: data.first_users,
    //   lastUsers: data.last_users,
    //   monthName: data.monthName,
    //   loading: false,
    //   error: null
    // };
    yield delay(2000);
    const rankingData = {
      firstUsers: [
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        }
      ],
      lastUsers: [
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        },
        {
          name: "Renato Tarantelli",
          xp: 1087,
          level: 8,
          teams: ["network"],
          rocketId: "yqFEZAEEfe2s9ZwaS",
          position: 12
        }
      ],
      monthName: "Julho",
      loading: false,
      error: null
    };
    yield put(RankingActions.getRankingResponse(rankingData));
  } catch (error) {
    yield put(
      RankingActions.getRankingResponse({
        loading: false,
        error: error.message,
        firstUsers: null,
        lastUsers: null,
        monthName: null
      })
    );
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
    yield put(
      RankingActions.getRankingUsersResponse({
        data,
        loading: false,
        error: null
      })
    );
  } catch (error) {
    yield put(
      RankingActions.getRankingUsersResponse({
        data: null,
        loading: false,
        error: error.message
      })
    );
  }
}
