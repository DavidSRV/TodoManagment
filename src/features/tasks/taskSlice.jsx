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
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskfaund = state.find((task) => task.id === action.payload);
      if (taskfaund) {
        state.splice(state.indexOf(taskfaund), 1);
      }
    },
  },
});

export default taskSlice.reducer;
export const { addTaks, deleteTask } = taskSlice.actions;
