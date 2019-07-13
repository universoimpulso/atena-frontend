import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";

import { Creators as AuthActions } from "../ducks/auth";

export function* signIn(data) {
  const { rocketId, password } = data.payload;
  try {
    // const response = yield call(api.post, "sessions", { rocketId, password });
    const user = {
      user: "Julio Goncalves",
      isCoreTeam: true,
      token: "123456",
      avatar:
        "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png"
    };

    localStorage.setItem("@atena:user", JSON.stringify(user));
    user.token &&
      localStorage.setItem("@atena:token", JSON.stringify(user.token));

    yield put(AuthActions.signInSuccess(user));
    window.location.reload();
  } catch (err) {
    yield put(AuthActions.signInFailure(err));
  }
}

export function* logout() {
  localStorage.removeItem("@atena:user");
  localStorage.removeItem("@atena:token");

  yield put(window.location.reload());
}
