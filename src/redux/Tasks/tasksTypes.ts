import { TaskInFocusModel, TaskModel } from "../../types/task.model";

export type tasksState = {
  activeTasks: Array<TaskModel>;
  completedTasks: Array<TaskModel>;
  tasksInFocusList: Array<TaskInFocusModel>;
};
