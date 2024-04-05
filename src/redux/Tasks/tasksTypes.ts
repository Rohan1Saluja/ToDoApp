import { TaskModel } from "../../types/task.model";

export type tasksState = {
  allTasks: Array<TaskModel>;
  activeTasks: Array<TaskModel>;
  completedTasks: Array<TaskModel>;
};
