import { compose, configureStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(middleWare(...middleWares))

export const store = configureStore(rootReducer, undefined, middleWares);
