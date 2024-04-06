import { useSelector } from "react-redux";
import { TaskActiveTab } from "../../types/enums/activity.enum";
import { TaskModel } from "../../types/task.model";
import {
  selectActiveTasks,
  selectAllTasks,
  selectCompletedTasks,
} from "../../redux/Tasks/tasksSelectors";

export const getActiveTabList = (activeTab: string) => {
  let taskList: TaskModel[] = [];
  switch (activeTab) {
    case TaskActiveTab.all:
      taskList = useSelector(selectAllTasks);
      return taskList;
    case TaskActiveTab.active:
      taskList = useSelector(selectActiveTasks);
      return taskList;
    case TaskActiveTab.completed:
      taskList = useSelector(selectCompletedTasks);
      return taskList;
    default:
      taskList = useSelector(selectAllTasks);
      return taskList;
  }
};
