import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

export const StoredActiveTasksContext = React.createContext("");
export const StoredCompletedTasksContext = React.createContext("");

document.addEventListener("DOMContentLoaded", async () => {
  const activeTasks = localStorage.getItem("activeTasks") ?? "[]";
  const completedTasks = localStorage.getItem("completedTasks") ?? "[]";
  console.log("Local Storage Active:", activeTasks);
  console.log("Local Storage Completed:", completedTasks);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <StoredActiveTasksContext.Provider value={JSON.parse(activeTasks)}>
          <StoredCompletedTasksContext.Provider
            value={JSON.parse(completedTasks)}
          >
            <App />
          </StoredCompletedTasksContext.Provider>
        </StoredActiveTasksContext.Provider>
      </Provider>
    </React.StrictMode>
  );
});
