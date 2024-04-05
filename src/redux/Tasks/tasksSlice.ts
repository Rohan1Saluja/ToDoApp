import { createSlice } from "@reduxjs/toolkit";
import { tasksState } from "./tasksTypes";

const initialState: tasksState = {
  allTasks: [],
  activeTasks: [],
  completedTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFilteredOrders: (state, action) => {},
  },
});

export const newOrdersReducer = tasksSlice.reducer;
