import React from "react";
import "./ToDoAppFlow.scss";
import { Text } from "./UI/Text";
import { TextInput } from "./UI/TextInput";
import { Check } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getTaskFocusList } from "./utils";
import { TaskModel } from "../types/task.model";
import { TaskActiveTab } from "../types/enums/activity.enum";
import { useDispatch } from "react-redux";

export const AppFlow: React.FC = () => {
  const dispatch = useDispatch();
  const [savedTasks, setSavedTasks] = React.useState<TaskModel[]>();
  const [activeTab, setActiveTab] = React.useState(TaskActiveTab.all);
  const list = [
    "Complete Online JavaScript Course",
    "10 Minutes Meditation",
    "Read for 1 hour",
  ];

  const loadTasksFromLocalStorage = () => {
    const loadTasks = localStorage.getItem("tasks");
    setSavedTasks(loadTasks ? JSON.parse(loadTasks) : []);
    dispatch({
      type: "tasks/setTasksInFocusList",
      payload: getTaskFocusList(savedTasks ?? []),
    });
    console.log("Load:", loadTasks);
  };
  const handleTaskinput = (event: any) => {
    console.log("Value:", event.target.value);
  };

  const handleTaskClick = () => {};

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
          {list.map((item, index) => (
            <div className="row" key={index}>
              <Text text={item} className="description" />
              <IconButton onClick={handleTaskClick}>
                <Check />
              </IconButton>
            </div>
          ))}
          <div className="navbar">
            <Text text="items left" className="description-small " />
            <div className="tabs">
              <Text text="All" className="description-small" />
              <Text text="Active" className="description-small" />
              <Text text="Completed" className="description-small" />
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
