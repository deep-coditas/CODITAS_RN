import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import reducer from "./Reducers";
import rootSaga from "./Sagas";

/**
 * logger to see the redux logs while development
 */
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(...middlewares, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
