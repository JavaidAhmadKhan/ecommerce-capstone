import { call, all } from "redux-saga";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
