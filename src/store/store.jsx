import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/slices/taskSlice";
import themeReducer from "../features/slices/themeSlice"

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer
  },
});
