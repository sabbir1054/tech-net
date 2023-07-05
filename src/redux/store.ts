import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/Counter/counterSlice";
import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
  // devTools: true,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)//our custom logger from hooks folder
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
