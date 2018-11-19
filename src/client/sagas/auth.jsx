import { all, put, takeEvery } from "redux-saga/effects";
import * as actions from "../constants/action-types";

function* initAuth() {
  try {
    yield put({ type: actions.INIT_AUTH_SUCCESS });
  } catch (error) {
    yield put({ type: actions.INIT_AUTH_FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.INIT_AUTH, initAuth)]);
}
