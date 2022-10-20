import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/slices/taskSlice";
import themeReducer from "../features/slices/themeSlice";
import filterReducer from "../features/slices/taskFilterSlice";


export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
    filter: filterReducer,
    
  },
});
