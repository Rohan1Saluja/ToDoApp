import "./ActiveTab.scss";
import { IconButton } from "@mui/material";
import { Text } from "../UI/Text";
import { Check } from "@mui/icons-material";
import { getActiveTabList } from "./utils";
import React from "react";
import { TaskActiveTab } from "../../types/enums/activity.enum";

interface Props {
  activeTab: string;
}

export const ActiveTab: React.FC<Props> = ({ activeTab }) => {
  const tasksList = getActiveTabList(activeTab);
  console.log("List of Tasks: ", tasksList);
  const handleTaskClick = () => {};

  const saveTasksToLocalStorage = () => {
    activeTab != TaskActiveTab.all &&
      localStorage.setItem(activeTab, JSON.stringify(tasksList));
    console.log("Successfully Saved");
  };

  React.useEffect(() => {
    saveTasksToLocalStorage();
  }, [activeTab]);

  return (
    <div className="active-tab">
      {tasksList.map((task, index) => (
        <div className="row" key={index}>
          <Text text={task.description} className="description" />
          <IconButton onClick={handleTaskClick}>
            <Check />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
