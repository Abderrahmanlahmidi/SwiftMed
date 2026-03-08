import { configureStore } from "@reduxjs/toolkit";
import isOpenCloseReducer from "./handlingOpenClose/hadleOpenClose";

export const store = configureStore({
  reducer: {
    isOpenClose: isOpenCloseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
