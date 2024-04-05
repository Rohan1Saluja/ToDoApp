import { RootState } from "../store";

export const setActiveTasks = (state: RootState) => state.tasks.activeTasks;

export const setCompletedTasks = (state: RootState) =>
  state.tasks.completedTasks;

export const setAllTasks = (state: RootState) => [
  state.tasks.activeTasks,
  state.tasks.completedTasks,
];
