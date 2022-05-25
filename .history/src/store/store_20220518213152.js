import { compose, configureStore, appleMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root reducer

export const store = configureStore(rootReducer)