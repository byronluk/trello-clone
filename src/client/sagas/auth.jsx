import { all, put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import qs from "query-string";

import * as actions from "../constants/action-types";
import { dbApiRoot } from "../constants";

/* eslint-disable no-console */
function* initAuth(action) {
  const query = qs.stringify(action.payload);
  const url = `${dbApiRoot}/account/init?${query}`;
  console.log("url: ", url);

  try {
    console.log("init auth, ", action);
    const res = yield call(axios, { method: "get", url });
    console.log("res: ", res);

    yield put({ type: actions.INIT_AUTH_SUCCESS });
  } catch (error) {
    yield put({ type: actions.INIT_AUTH_FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.INIT_AUTH, initAuth)]);
}
