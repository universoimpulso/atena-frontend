import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UserActions } from "../ducks/user";

export function* getProfile({ uuid }) {
  try {
    yield delay(1000);
    // throw new Error("Não foi possivel buscar dados deste usuario");
    const data = {
      loading: false,
      error: null,
      userInfo: {
        name: "Julio Goncalves",
        score: 1234,
        level: 5,
        generalPosition: 2,
        monthlyPosition: 4,
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
      },
      userAchievements: [
        {
          name: "Rocket Chat",
          achievements: [
            {
              type: "messageSend",
              name: "Mensagens Postadas",
              medal: 0,
              tier: 0,
              maxScore: 100,
              score: 0
            },
            {
              type: "reactionSend",
              name: "Reações enviadas",
              medal: 3,
              tier: 2,
              maxScore: 100,
              score: 24
            },
            {
              type: "reactionGiven",
              name: "Reações Recebidas",
              medal: 2,
              tier: 3,
              maxScore: 100,
              score: 98
            }
          ]
        },
        {
          name: "Projetos Github",
          achievements: [
            {
              type: "issueCreated",
              name: "Issue Criada",
              medal: 3,
              tier: 2,
              maxScore: 100,
              score: 60
            },
            {
              type: "pullRequestApproved",
              name: "Pull Request Aprovadas",
              medal: 4,
              tier: 0,
              maxScore: 100,
              score: 58
            },
            {
              type: "pullRequestCreated",
              name: "Pull Request Criadas",
              medal: 1,
              tier: 2,
              maxScore: 100,
              score: 75
            },
            {
              type: "review",
              name: "Reviews Feitos",
              medal: 2,
              tier: 3,
              maxScore: 100,
              score: 12
            }
          ]
        },
        {
          name: "Blog Impulso",
          achievements: [
            {
              type: "comments",
              name: "Comentários",
              medal: 3,
              tier: 2,
              maxScore: 100,
              score: 40
            },
            {
              type: "posts",
              name: "Postagens",
              medal: 2,
              tier: 3,
              maxScore: 100,
              score: 30
            }
          ]
        }
      ]
    };
    yield put(UserActions.getProfileResponse(data));
  } catch (error) {
    yield put(
      UserActions.getProfileResponse({
        userInfo: null,
        userAchievements: null,
        loading: false,
        error: error.message
      })
    );
  }
}
export function* getUserInfo() {
  try {
    yield delay(1000);
    // throw new Error("Não foi possivel buscar dados deste usuario");
    const data = {
      name: "Julio Goncalves",
      id: "1234567",
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
    yield put(
      UserActions.getUserInfoResponse({ data, loading: false, error: null })
    );
  } catch (error) {
    yield put(
      UserActions.getUserInfoResponse({
        data: null,
        loading: false,
        error: error.message
      })
    );
  }
}
export function* putUserInfo() {
  // TODO
  try {
    yield delay(1000);
    // throw new Error("Não foi possivel buscar dados deste usuario");
    const user = {
      name: "Julio Goncalves",
      id: "1234567",
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
    yield put(
      UserActions.getUserInfoResponse({ user, loading: false, error: null })
    );
  } catch (error) {
    yield put(
      UserActions.getUserInfoResponse({
        data: null,
        loading: false,
        error: error.message
      })
    );
  }
}
