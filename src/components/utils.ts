import { TaskInFocusModel, TaskModel } from "../types/task.model";

export const getTaskFocusList = (tasks: TaskModel[]) => {
  const initialTaskInFocus: TaskInFocusModel[] = [];
  tasks.map((task: TaskModel, index: number) => {
    initialTaskInFocus.push({
      id: task.id,
      value: false,
    });
  });
  return initialTaskInFocus;
};
