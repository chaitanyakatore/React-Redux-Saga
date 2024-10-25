import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import numberReducer from "./numberSlice";
import rootSaga from "./sagas";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with default middleware + Saga middleware
const store = configureStore({
  reducer: {
    number: numberReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk, add saga
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
