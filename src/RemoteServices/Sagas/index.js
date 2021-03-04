import { all } from "redux-saga/effects";
import Login from "./Login";

// list of all combined actions
const rootSaga = function* rootSaga() {
  yield all([
    Login()
  ]);
};

export default rootSaga;
