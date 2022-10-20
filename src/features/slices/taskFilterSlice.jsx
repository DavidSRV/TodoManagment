// import { createSlice } from "@reduxjs/toolkit";

// export const taskFilterSlice = createSlice({
//   name: "filter",
//   initialState: [],
//   reducers: {
//     allTask: (state, action) => {
//       state = [...action.payload];
//     },
//     activeTask: (state, action) => {
//       state((active) => active.completed === false);
//     },
//     doneTask: (state, action) => {
//       state = [...action.payload];
//       const filter = state((done) => done.completed === true);
//       return (state = [...filter]);
//     },
//   },
// });

// export default taskFilterSlice.reducer;
// export const filterTask = (state) => state.filter;
// export const { allTask, activeTask, doneTask } = taskFilterSlice.actions;
