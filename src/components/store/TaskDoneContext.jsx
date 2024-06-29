import React, { useState } from "react";

const DEFAULT_PROP = {
  doneTasks: [],
  toggleTasks: (id) => {},
};

export const TaskDoneContext = React.createContext(DEFAULT_PROP);

const TaskDoneContextProvider = (props) => {
  const [doneTasks, setDoneTasks] = useState([]);

  const toggleTasks = (id) => {
    const foundItem = doneTasks.find((curId) => curId === id);
    if (foundItem) {
      const updatedTasks = doneTasks.filter((curId) => curId !== id);
      setDoneTasks(updatedTasks);
    } else {
      setDoneTasks((prevTasks) => [...prevTasks, id]);
    }
  };

  return (
    <TaskDoneContext.Provider
      value={{
        doneTasks,
        toggleTasks,
      }}
    >
      {props.children}
    </TaskDoneContext.Provider>
  );
};

export default TaskDoneContextProvider;
