import { useContext, createContext, useState } from "react";

const TaskContext = createContext(null);

export const useTask = () => {
  return useContext(TaskContext);
};

const TaskProvider = ({ children }) => {
  const [streakItem, setStreakItem] = useState({
    id: Date.now(),
    text: "hello",
    maxStreak: 10,
    currentStreak: 0,
  });
  const addStreakItem = () => {};
  const deleteStreakItem = () => {};
  const updateStreakItem = () => {};
  return (
    <TaskContext.Provider
      value={{
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
