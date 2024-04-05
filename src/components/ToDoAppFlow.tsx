import "./ToDoAppFlow.scss";
import { Text } from "./UI/Text";
import { TextInput } from "./UI/TextInput";

export const AppFlow: React.FC = () => {
  const list = ["task1", "task2", "task3"];
  const handleTaskinput = (event: any) => {
    console.log("Value:", event.target.value);
  };
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
              {item}
            </div>
          ))}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
