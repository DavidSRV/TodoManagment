import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    description: "Task 2 description",
    completed: false,
  },
  {
    id: "3",
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
    completedTask: (state, action) => {
      const taskfound = state.indexOf(
        state.find((task) => task.id === action.payload)
      );
      state[taskfound].completed = true;
    },
  },
});

export default taskSlice.reducer;
export const { addTaks, deleteTask, completedTask } = taskSlice.actions;
