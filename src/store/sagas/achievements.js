import { call, put, delay } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Creators as achievementsActions } from "../ducks/achievements";

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
const data2 = [
  {
    name: "RocketChat",
    data: [
      {
        type: "Mensagens enviadas",
        values: [
          {
            name: "bronze",
            tiers: [
              { name: "I", value: 1511 },
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

export function* getAchievements() {
  try {
    // const { data } = yield call(api.get, `api/v1/MOCK);
    yield put(achievementsActions.getAchievementsSuccess(data));
  } catch (error) {
    yield put(
      achievementsActions.getAchievementsFailure("Erro ao buscar cards")
    );
  }
}
export function* getUserAchievements() {
  try {
    const data = [
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
    ];
    yield put(achievementsActions.getUserAchievementsSuccess(data));
  } catch (error) {
    yield put(
      achievementsActions.editAchievementFailure("Erro ao buscar cards")
    );
  }
}
export function* editAchievement() {
  try {
    yield delay(2000);
    // throw new Error("Servidor indisponivel");
    yield put(achievementsActions.editAchievementSuccess(data2));
    toast.success("Conquista alterada com sucesso!");
  } catch (error) {
    toast.error(`Não foi possível alterar conquista. ${error.message}`);
    yield put(achievementsActions.editAchievementFailure());
  }
}
export function* createAchievement(action) {
  console.tron.log("saga", action.payload.data);
  try {
    yield put(achievementsActions.createAchievementSuccess());
  } catch (error) {
    yield put(
      achievementsActions.createAchievementFailure("Erro ao buscar cards")
    );
  }
}
