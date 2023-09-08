import countSlice from "./features/countSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["count"],
};
const rootReducer = combineReducers({
    count: countSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;




// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import accessTokenMiddleware from "./path-to-your-middleware/accessTokenMiddleware";
// import rootReducer from "./your-reducer";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk, accessTokenMiddleware, ...getDefaultMiddleware()],
// });