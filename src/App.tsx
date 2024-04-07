import { useDispatch } from "react-redux";
import { AppFlow } from "./components/ToDoAppFlow";
import React from "react";
import { StoredActiveTasksContext, StoredCompletedTasksContext } from "./main";

function App() {
  const dispatch = useDispatch();
  const activeTasks = React.useContext(StoredActiveTasksContext);
  const completedTasks = React.useContext(StoredCompletedTasksContext);

  console.log("Local Storage Active:", activeTasks);
  console.log("Local Storage Completed:", completedTasks);

  dispatch({ type: "tasks/setActiveTasks", payload: activeTasks });
  dispatch({
    type: "tasks/setCompletedTasks",
    payload: completedTasks,
  });
  return (
    <>
      <AppFlow />
    </>
  );
}

export default App;
