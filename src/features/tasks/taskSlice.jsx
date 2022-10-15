import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
  {
    id: "3",
    title: "Task 3",
    description: "Task 3 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaks: (state, action) => {
      state.push(action.payload)
    },
  },
});

export default taskSlice.reducer;
export const { addTaks } = taskSlice.actions;
