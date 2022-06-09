import { configureStore } from "@reduxjs/toolkit";
import { alternatifSlice, criteriaSlice, projectSlice } from "./slices";

export const store = configureStore({
  reducer: {
    criteria: criteriaSlice,
    alternatif: alternatifSlice,
    project: projectSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
