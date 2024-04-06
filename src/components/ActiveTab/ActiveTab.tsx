import { IconButton } from "@mui/material";
import { Text } from "../UI/Text";
import { Check } from "@mui/icons-material";

interface Props {
  activeTab: string;
  list: Array<string>;
}

export const ActiveTab: React.FC<Props> = ({ activeTab, list }) => {
  console.log("Active Tab: ", activeTab);
  const handleTaskClick = () => {};

  return (
    <div>
      {list.map((item, index) => (
        <div className="row" key={index}>
          <Text text={item} className="description" />
          <IconButton onClick={handleTaskClick}>
            <Check />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
