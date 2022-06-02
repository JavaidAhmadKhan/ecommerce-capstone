import { compose, configureStore, appleMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

export const store = configureStore(rootReducer, undefined, middleWares);
