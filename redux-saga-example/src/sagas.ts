import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchNumberRequest, fetchNumberSuccess } from "./numberSlice";

// Helper: Simulate fetching a random number (like a server call)
function fetchRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

// Generator type annotation: Return type is 'Generator' (Type-safe)
function* handleFetchNumber(): Generator<any, void, number> {
  yield delay(1000); // Simulate a 1-second delay
  const randomNumber: number = yield call(fetchRandomNumber); // Fetch random number
  yield put(fetchNumberSuccess(randomNumber)); // Dispatch success action
}

// Root saga to watch for actions (no implicit 'any' now!)
export default function* rootSaga(): Generator {
  yield takeEvery(fetchNumberRequest.type, handleFetchNumber);
}
