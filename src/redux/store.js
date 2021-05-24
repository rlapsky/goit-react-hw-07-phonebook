import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loger from "redux-logger";
import reducer from "./reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  loger,
];

const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware,
});

export default store;
