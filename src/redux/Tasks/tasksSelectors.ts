import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectTasksInFocusList = (state: RootState) =>
  state.tasks.tasksInFocusList;

export const selectActiveTasks = (state: RootState) => state.tasks.activeTasks;

export const selectCompletedTasks = (state: RootState) =>
  state.tasks.completedTasks;

export const selectAllTasks = createSelector(
  [selectActiveTasks, selectCompletedTasks],
  (activeTasks, completedTasks) => [...activeTasks, ...completedTasks]
);
