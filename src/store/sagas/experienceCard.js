import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ExperienceCardActions } from "../ducks/experienceCard";

export function* getExperience(action) {
  try {
    // const { data } = yield call(api.get, `api/v1/MOCK);

    const data = {
      general: {
        limitPerDay: 20,
        inactivityPeriod: 8,
        inactivityLost: 1
      },

      activity: {
        rocketChat: {
          message: 1,
          reactions: 1,
          receiveReaction: 2
        },
        blog: {
          post: 5,
          comment: 1
        },
        github: {
          issue: 5,
          review: 1,
          pullRequest: 1,
          approvedPullRequest: 1
        },
        meetup: {
          participant: 5,
          mediator: 1,
          facilitator: 1
        },
        referral: {
          indication: 5,
          allocation: 1
        },
        research: {
          validation: 5,
          skill: 1
        },
        allocation: {
          interview: 5,
          approved: 1,
          allocated: 1
        },
        linkedin: {
          impulser: 3
        }
      }
    };

    yield put(ExperienceCardActions.getExperienceSuccess(data));
  } catch (error) {
    yield put(
      ExperienceCardActions.getExperienceFailure("Erro ao buscar cards")
    );
  }
}
export function* putExperience(action) {
  console.tron.log("saga", action.payload.data);
  try {
    yield put(ExperienceCardActions.putExperienceSuccess());
  } catch (error) {
    yield put(
      ExperienceCardActions.putExperienceFailure("Erro ao buscar cards")
    );
  }
}
