import { useContext, createContext, useState } from "react";

const TaskContext = createContext(null);

export const useTask = () => {
  return useContext(TaskContext);
};

const TaskProvider = ({ children }) => {
  const [streakItem, setStreakItem] = useState([
    {
      id: Date.now(),
      text: "hello",
      maxStreak: 10,
      currentStreak: 0,
    },
  ]);
  const [task, setTask] = useState("");
  const addStreakItem = () => {
    console.log("test")
    const newStreakItem = [
      ...streakItem,
      { id: Date.now(), text: task, maxStreak: 0, currentStreak: 0 },
    ];
    setStreakItem(newStreakItem);
    setTask("");
  };
  const deleteStreakItem = () => {};
  const updateStreakItem = () => {};
  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        streakItem,
        setStreakItem,
        addStreakItem,
        deleteStreakItem,
        updateStreakItem,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
