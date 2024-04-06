import "./ActiveTab.scss";
import { IconButton } from "@mui/material";
import { Text } from "../UI/Text";
import { Check } from "@mui/icons-material";
import { getActiveTabList } from "./utils";

interface Props {
  activeTab: string;
  list: Array<string>;
}

export const ActiveTab: React.FC<Props> = ({ activeTab, list }) => {
  const tasksList = getActiveTabList(activeTab);
  console.log("List of Tasks: ", tasksList);
  const handleTaskClick = () => {};

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
