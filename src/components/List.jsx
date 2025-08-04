import React from "react";
import { useTask } from "../context/Task.jsx";

const List = () => {
  const { streakItem } = useTask();
  const currentDate = new Date();
  const date = currentDate.toDateString();
  return (
    <div>
      <ul className={"flex justify-center mt-5 gap-3"}>
        {streakItem.map((task) => (
          <li
            key={task.id}
            className={
              "w-[200px] h-[150px] rounded-lg bg-[#197278] text-[#EDDDD4]"
            }
          >
            <div className={"flex flex-col gap-1 items-center justify-center h-full"}>
              <div className={"font-bold text-xl"}>{task.text}</div>
              <div>Max Streak: {task.maxStreak}</div>
              <div>Current Streak: {task.currentStreak}</div>
              <div className={"flex items-center justify-center gap-1"}>
                <input type="checkbox" id={"check"}/>
                <label htmlFor="check">{date}</label>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
