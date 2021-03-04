import { put, takeLatest, call } from "redux-saga/effects";
import ApiCaller from "../APICaller";

const callService = (payload) => ApiCaller("/api/login", "post", payload).then((response) => response);

export default function* watchRequest() {
  yield takeLatest("DO_LOGIN", function* (action) {
    yield put({ type: "DO_LOGIN_STARTED" });
    try {
      const loginData = yield call(callService.bind(this, action.payload));
      yield put({ type: "DO_LOGIN_SUCCESS", payload: loginData });
    } catch (error) {
      yield put({ type: "DO_LOGIN_FAILED" });
    }
  });
};
