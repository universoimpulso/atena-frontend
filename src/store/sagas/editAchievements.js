import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as EditAchievementsActions } from "../ducks/editAchievements";

export function* getAchievements(action) {
  try {
    // const { data } = yield call(api.get, `api/v1/MOCK);

    const data = [
      {
        name: "RocketChat",
        data: [
          {
            type: "Mensagens enviadas",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },
          {
            type: "Reações Dadas",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },
          {
            type: "Reações Recebidas",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },

          {
            type: "Reactions enviados",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },
          {
            type: "Reactions recebidos",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Github",
        data: [
          {
            type: "Pull Request",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },
          {
            type: "Review",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },
          {
            type: "Pull Request aprovada",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          },

          {
            type: "Issue",
            values: [
              {
                name: "bronze",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "silver",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "gold",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "platinum",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              },
              {
                name: "diamond",
                tiers: [
                  { name: "I", value: 1500 },
                  { name: "II", value: 1600 },
                  { name: "III", value: 1700 },
                  { name: "IV", value: 1800 },
                  { name: "V", value: 2000 }
                ]
              }
            ]
          }
        ]
      }
    ];
    yield put(EditAchievementsActions.getAchievementsSuccess(data));
  } catch (error) {
    yield put(
      EditAchievementsActions.getAchievementsFailure("Erro ao buscar cards")
    );
  }
}
export function* putAchievements(action) {
  console.tron.log("saga", action.payload.data);
  try {
    yield put(EditAchievementsActions.putAchievementsSuccess());
  } catch (error) {
    yield put(
      EditAchievementsActions.putAchievementsFailure("Erro ao buscar cards")
    );
  }
}
