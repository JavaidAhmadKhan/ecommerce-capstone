import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utilis";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
// GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
// EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
// SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
// SIGN_IN_FAILURE: "user/SIGN_IN_FAILURE",

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
