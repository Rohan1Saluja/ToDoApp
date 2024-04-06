import React from "react";
import "./ToDoAppFlow.scss";
import { Text } from "./UI/Text";
import { TextInput } from "./UI/TextInput";
import { Check } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getTaskFocusList } from "./utils";
import { TaskModel } from "../types/task.model";
import { TaskActiveTab } from "../types/enums/activity.enum";
import { useDispatch, useSelector } from "react-redux";
import { ActiveTab } from "./ActiveTab/ActiveTab";
import { selectAllTasks } from "../redux/Tasks/tasksSelectors";
import { Button } from "./UI/Button";

export const AppFlow: React.FC = () => {
  const dispatch = useDispatch();
  const appTasks = useSelector(selectAllTasks);
  const [savedTasks, setSavedTasks] = React.useState<TaskModel[]>();
  const [activeTab, setActiveTab] = React.useState(TaskActiveTab.all);
  const list = [
    "Complete Online JavaScript Course",
    "10 Minutes Meditation",
    "Read for 1 hour",
  ];

  const loadTasksFromLocalStorage = () => {
    const loadTasks = localStorage.getItem("tasks");
    setSavedTasks(loadTasks ? JSON.parse(loadTasks) : appTasks);
    const taskFocusList = getTaskFocusList(
      loadTasks ? JSON.parse(loadTasks) : appTasks
    );
    dispatch({
      type: "tasks/setTasksInFocusList",
      payload: taskFocusList,
    });
    console.log("Task Focus List:", taskFocusList);

    console.log("Load:", loadTasks);
  };
  const handleTaskinput = (event: any) => {
    console.log("Value:", event.target.value);
  };

  //Tab Selection

  const handleTabClick = (tabName: TaskActiveTab) => {
    setActiveTab(tabName);
  };

  React.useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  return (
    <div className="container">
      <div className="layout"></div>
      <div className="app-container">
        <div className="header">
          <Text text="TODO" className="heading" />
          <TextInput
            placeholder="Create a new todo"
            width="large"
            handleChange={(event: any) => handleTaskinput(event)}
          />
        </div>
        <div className="main-container">
          <ActiveTab list={list} activeTab={activeTab} />
          <div className="navbar">
            <Text text="items left" className="description-small " />
            <div className="tabs">
              <Button
                buttonText={TaskActiveTab.all}
                variant="text"
                className={activeTab === TaskActiveTab.all ? "active" : ""}
                onClick={() => handleTabClick(TaskActiveTab.all)}
              />
              <Button
                buttonText={TaskActiveTab.active}
                variant="text"
                className={activeTab === TaskActiveTab.active ? "active" : ""}
                onClick={() => handleTabClick(TaskActiveTab.active)}
              />
              <Button
                buttonText={TaskActiveTab.completed}
                variant="text"
                className={
                  activeTab === TaskActiveTab.completed ? "active" : ""
                }
                onClick={() => handleTabClick(TaskActiveTab.completed)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Text text="Created by   " className="description-small" />
        <Text text="Rohan Saluja" className="description-small bold" />
        <a href="mailto:rohansaluja1101@gmail.com">
          <Text
            text="| rohansaluja1101@gmail.com"
            className="description-small"
          />
        </a>
      </div>
    </div>
  );
};
