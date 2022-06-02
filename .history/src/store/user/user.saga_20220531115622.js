import { takeLatest, put, all, call } from "redux-saga-effects";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function* userSagas() {
  yield all([]);
}
