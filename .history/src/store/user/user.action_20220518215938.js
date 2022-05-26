import { createAction } from "../../utils/reducer/reducer.utilis";

const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
