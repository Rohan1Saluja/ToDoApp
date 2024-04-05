import { createSlice } from "@reduxjs/toolkit";
import { tasksState } from "./tasksTypes";

const initialState: tasksState = {
  activeTasks: [],
  completedTasks: [],
  tasksInFocusList: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasksInFocusList: (state, action) => {
      state.tasksInFocusList = action.payload;
    },

    addCompletedTask: (state, action) => {
      state.completedTasks.push(action.payload);
    },
    removeFromCompletedTasks: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        (task) => task !== action.payload
      );
    },

    //

    addActiveTask: (state, action) => {
      state.activeTasks.push(action.payload);
    },
    removeFromActiveTasks: (state, action) => {
      state.activeTasks = state.completedTasks.filter(
        (task) => task !== action.payload
      );
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
