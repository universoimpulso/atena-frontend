import { delay, call, put } from "redux-saga/effects";
import api from "../../services/api";
import history from "../../services/history";
import { decrypt } from "../../services/crypto";
import { toast } from "react-toastify";

import { Creators as AuthActions } from "../ducks/auth";

export function* signIn({ data }) {
  yield delay(2000);
  try {
    // const { rocketId, password, code } = data;
    // let response;
    // if (code) {
    //   response = yield call(api.post, "auth/linkedin", { code });
    // } else if (rocketId && password) {
    //   response = yield call(api.post, "auth", { rocketId, password });
    // }
    // const { uuid, isCoreTeam, avatar } = yield call(
    //   decrypt,
    //   response.data.token
    // );

    // yield put(
    //   AuthActions.signInSuccess({
    //     token: response.data.token,
    //     isCoreTeam,
    //     avatar:
    //       avatar ||
    //       "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png",
    //     uuid
    //   })
    // );
    yield put(
      AuthActions.signInSuccess({
        token: "123456",
        isCoreTeam: true,
        avatar:
          "https://avatars.slack-edge.com/2018-08-01/409144328290_81d8f97e55540e84881c_72.png",
        uuid: "23se456"
      })
    );
    yield history.push("/userInfo");
  } catch (err) {
    toast.error(`Não foi possível completar o login: ${err.message}`);
    yield put(AuthActions.signInFailure(err));
  }
}

export function logout() {
  history.push("/");
}
