import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as GeneralReportsActions } from "../ducks/generalReports";

export function* getUsers(action) {
  try {
    yield delay(1000);

    const generalReportsData = {
      users: [
        { name: "Nível 1", value: 335 },
        { name: "Nível 2", value: 310 },
        { name: "Nível 3", value: 234 },
        { name: "Nível 4", value: 535 },
        { name: "Nível 5", value: 154 },
        { name: "Nível 6", value: 754 },
        { name: "Nível 7", value: 354 },
        { name: "Nível 8", value: 854 },
        { name: "Nível 9", value: 154 },
        { name: "Nível 10", value: 554 }
      ],
      totalUsers: 12043
    };

    // throw new Error("Não foi possível buscar os dados");
    yield put(GeneralReportsActions.getUsersSuccess(generalReportsData));
  } catch (error) {
    yield put(GeneralReportsActions.requestFailure({ users: error.message }));
  }
}

export function* getUsersAchievements(action) {
  try {
    yield delay(1000);
    const data = {
      name: "conquistas",
      byMonth: 865,
      byMonthPercentage: 13.8,
      byYear: 3587,
      byYearPercentage: -13.8,
      total: 12987
    };
    throw new Error("Não foi possível buscar os dados");
    yield put(
      GeneralReportsActions.getUsersAchievementsResponse({
        type: "achievements",
        loading: false,
        error: null,
        data
      })
    );
  } catch (error) {
    yield put(
      GeneralReportsActions.getUsersAchievementsResponse({
        type: "achievements",
        loading: false,
        error: error.message
      })
    );
  }
}

export function* getMissions(action) {
  try {
    // const { data } = yield call(api.get, `api/v1/userTESTE`);
    yield delay(2000);
    const data = {
      name: "missões",
      byMonth: 565,
      byMonthPercentage: -14.8,
      byYear: 2587,
      byYearPercentage: 11.8,
      total: 22987
    };
    if (action.payload.data) throw new Error("Você nao tem acesso");
    // throw new Error("Não foi possível buscar os dados");
    yield put(
      GeneralReportsActions.getMissionsResponse({
        type: "missions",
        loading: false,
        error: null,
        data
      })
    );
  } catch (error) {
    const data = {
      name: "missões",
      byMonth: 565,
      byMonthPercentage: -14.8,
      byYear: 2587,
      byYearPercentage: 11.8,
      total: 22987
    };
    yield put(
      GeneralReportsActions.getMissionsResponse({
        type: "missions",
        loading: false,
        data,
        error: error.message
      })
    );
  }
}
export function* getXp(action) {
  try {
    // const { data } = yield call(api.get, `api/v1/userTESTE`);
    yield delay(3000);
    const data = {
      name: "experiência",
      byMonth: 165,
      byMonthPercentage: -6.8,
      byYear: 587,
      byYearPercentage: 16.8,
      total: 2987
    };
    // throw new Error("Não foi possível buscar os dados");
    yield put(
      GeneralReportsActions.getXpResponse({
        type: "xp",
        loading: false,
        error: null,
        data
      })
    );
  } catch (error) {
    yield put(
      GeneralReportsActions.getXpResponse({
        type: "xp",
        loading: false,
        error: error.message
      })
    );
  }
}

export function* getTeams() {
  try {
    yield delay(2000);
    const teams = [
      {
        name: "network",
        total: 1837,
        message: {
          send: 1452,
          receive: 7489
        },
        reactions: {
          send: 759,
          receive: 785
        },
        response: {
          send: 784,
          receive: 695
        },
        blog: {
          posts: 452,
          comments: 745
        },
        github: {
          issues: 548,
          reviews: 475,
          pullRequests: {
            created: 125,
            approved: 98
          }
        },
        meetups: {
          participants: 236,
          mediators: 65,
          facilitators: 74
        },
        referral: {
          allocated: 74,
          indications: 745
        }
      },
      {
        name: "atari",
        total: 54837,
        message: {
          send: 1452,
          receive: 7489
        },
        reactions: {
          send: 759,
          receive: 785
        },
        response: {
          send: 784,
          receive: 695
        },
        blog: {
          posts: 452,
          comments: 745
        },
        github: {
          issues: 548,
          reviews: 475,
          pullRequests: {
            created: 125,
            approved: 98
          }
        },
        meetups: {
          participants: 236,
          mediators: 65,
          facilitators: 74
        },
        referral: {
          allocated: 74,
          indications: 745
        }
      },
      {
        name: "corinthians",
        total: 26837,
        message: {
          send: 1452,
          receive: 7489
        },
        reactions: {
          send: 759,
          receive: 785
        },
        response: {
          send: 784,
          receive: 695
        },
        blog: {
          posts: 452,
          comments: 745
        },
        github: {
          issues: 548,
          reviews: 475,
          pullRequests: {
            created: 125,
            approved: 98
          }
        },
        meetups: {
          participants: 236,
          mediators: 65,
          facilitators: 74
        },
        referral: {
          allocated: 74,
          indications: 745
        }
      }
    ];
    // throw new Error("Não foi possível buscar times");
    yield put(GeneralReportsActions.getTeamsSuccess(teams));
  } catch (error) {
    yield put(
      GeneralReportsActions.requestFailure({
        teams: error.message
      })
    );
  }
}
