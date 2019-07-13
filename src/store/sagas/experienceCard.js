import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ExperienceCardActions } from "../ducks/experienceCard";
import { toast } from "react-toastify";

const data = {
  general: [
    {
      key: "limitPerDay",
      name: "limite de experiência diária",
      text: "até:",
      values: [
        {
          key: "limitPerDay",
          initialValue: 20
        }
      ]
    },
    {
      key: "inactivityPeriod",
      name: "período de inatividade",
      text: "até:",
      values: [
        {
          key: "inactivityPeriod",
          initialValue: 8
        }
      ]
    },
    {
      key: "inactivityLost",
      name: "XP perdido por inatividade",
      text: "até:",
      values: [
        {
          key: "inactivityLost",
          initialValue: 2
        }
      ]
    }
  ],

  activity: [
    {
      key: "rocketChat",
      name: "rocket chat",
      values: [
        {
          key: "message",
          text: "mensagens",
          initialValue: 2
        },
        {
          key: "reactions",
          text: "dar reactions",
          initialValue: 1
        },
        {
          key: "receiveReaction",
          text: "receber reactions",
          initialValue: 2
        }
      ]
    },
    {
      key: "meetup",
      name: "meetup",
      values: [
        {
          key: "participant",
          text: "participante",
          initialValue: 5
        },
        {
          key: "mediator",
          text: "mediador",
          initialValue: 3
        },
        {
          key: "facilitator",
          text: "facilitador",
          initialValue: 3
        }
      ]
    },
    {
      key: "blog",
      name: "blog",
      values: [
        { key: "post", text: "postagem realizada", initialValue: 3 },
        {
          key: "comment",
          text: "comentário realizado",
          initialValue: 2
        }
      ]
    },
    {
      key: "github",
      name: "open source",
      values: [
        { key: "issue", text: "issues", initialValue: 3 },
        {
          key: "review",
          text: "dar reactions",
          initialValue: 2
        },
        {
          key: "pullRequest",
          text: "pull request",
          initialValue: 2
        },
        {
          key: "approvedPullRequest",
          text: "PR aprovada",
          initialValue: 5
        }
      ]
    },
    {
      key: "referral",
      name: "referral",
      values: [
        {
          key: "indication",
          text: "impulser indicado",
          initialValue: 3
        },
        {
          key: "allocation",
          text: "alocado via indicação",
          initialValue: 2
        }
      ]
    },
    {
      key: "research",
      name: "research",
      values: [
        {
          key: "validation",
          text: "passar pela validação",
          initialValue: 2
        },
        {
          key: "skill",
          text: "skill assessments",
          initialValue: 2
        }
      ]
    },
    {
      key: "allocation",
      name: "alocação",
      values: [
        {
          key: "interview",
          text: "entrevistado",
          initialValue: 2
        },
        {
          key: "approved",
          text: "aprovado",
          initialValue: 3
        },
        {
          key: "allocated",
          text: "alocado",
          initialValue: 2
        }
      ]
    },
    {
      key: "linkedin",
      name: "linkedin",
      values: [
        {
          key: "impulser",
          text: "trabalhando na impulso",
          initialValue: 2
        }
      ]
    }
  ]
};
const data2 = {
  general: [
    {
      key: "limitPerDay",
      name: "limite de experiência diária",
      text: "até:",
      values: [
        {
          key: "limitPerDay",
          initialValue: 23
        }
      ]
    },
    {
      key: "inactivityPeriod",
      name: "período de inatividade",
      text: "até:",
      values: [
        {
          key: "inactivityPeriod",
          initialValue: 8
        }
      ]
    },
    {
      key: "inactivityLost",
      name: "XP perdido por inatividade",
      text: "até:",
      values: [
        {
          key: "inactivityLost",
          initialValue: 2
        }
      ]
    }
  ],

  activity: [
    {
      key: "rocketChat",
      name: "rocket chat",
      values: [
        {
          key: "message",
          text: "mensagens",
          initialValue: 2
        },
        {
          key: "reactions",
          text: "dar reactions",
          initialValue: 1
        },
        {
          key: "receiveReaction",
          text: "receber reactions",
          initialValue: 2
        }
      ]
    },
    {
      key: "meetup",
      name: "meetup",
      values: [
        {
          key: "participant",
          text: "participante",
          initialValue: 5
        },
        {
          key: "mediator",
          text: "mediador",
          initialValue: 3
        },
        {
          key: "facilitator",
          text: "facilitador",
          initialValue: 3
        }
      ]
    },
    {
      key: "blog",
      name: "blog",
      values: [
        { key: "post", text: "postagem realizada", initialValue: 3 },
        {
          key: "comment",
          text: "comentário realizado",
          initialValue: 2
        }
      ]
    },
    {
      key: "github",
      name: "open source",
      values: [
        { key: "issue", text: "issues", initialValue: 3 },
        {
          key: "review",
          text: "dar reactions",
          initialValue: 2
        },
        {
          key: "pullRequest",
          text: "pull request",
          initialValue: 2
        },
        {
          key: "approvedPullRequest",
          text: "PR aprovada",
          initialValue: 5
        }
      ]
    },
    {
      key: "referral",
      name: "referral",
      values: [
        {
          key: "indication",
          text: "impulser indicado",
          initialValue: 3
        },
        {
          key: "allocation",
          text: "alocado via indicação",
          initialValue: 2
        }
      ]
    },
    {
      key: "research",
      name: "research",
      values: [
        {
          key: "validation",
          text: "passar pela validação",
          initialValue: 2
        },
        {
          key: "skill",
          text: "skill assessments",
          initialValue: 2
        }
      ]
    },
    {
      key: "allocation",
      name: "alocação",
      values: [
        {
          key: "interview",
          text: "entrevistado",
          initialValue: 2
        },
        {
          key: "approved",
          text: "aprovado",
          initialValue: 3
        },
        {
          key: "allocated",
          text: "alocado",
          initialValue: 2
        }
      ]
    },
    {
      key: "linkedin",
      name: "linkedin",
      values: [
        {
          key: "impulser",
          text: "trabalhando na impulso",
          initialValue: 2
        }
      ]
    }
  ]
};
export function* getExperience() {
  try {
    yield delay(1000);

    // throw new Error("Não foi possível buscar os dados");

    yield put(ExperienceCardActions.getExperienceSuccess(data));
  } catch (error) {
    yield put(ExperienceCardActions.getExperienceFailure(error.message));
  }
}
export function* putExperience(action) {
  console.tron.log("saga", action.payload.data);
  try {
    yield delay(1000);

    // throw new Error("Não foi possível atualizar a pontuação");

    yield put(ExperienceCardActions.putExperienceSuccess(data2));
    toast.success("Pontuação atualizada com sucesso!");
  } catch (error) {
    toast.error(error.message);
    yield put(ExperienceCardActions.putExperienceFailure());
  }
}
