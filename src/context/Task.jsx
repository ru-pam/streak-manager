import { useContext, createContext, useState } from "react";

const TaskContext = createContext(null);

export const useTask = () => {
  return useContext(TaskContext);
};

const TaskProvider = ({ children }) => {
  const [streakItem, setStreakItem] = useState([]);
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
  const deleteStreakItem = (id) => {
    const newStreakItem = streakItem.filter((item) => item.id !== id);
    setStreakItem(newStreakItem);
  };
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
