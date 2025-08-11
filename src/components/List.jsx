import React, { useState } from "react";
import { useTask } from "../context/Task.jsx";
//bug - clicking edit on one task is making all tasks switch to input mode.
const List = () => {
  const { streakItem, deleteStreakItem, updateStreakItem } = useTask();
  const currentDate = new Date();
  const date = currentDate.toDateString();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      <ul className={"flex justify-center mt-5 gap-3"}>
        {streakItem.map((task) => (
          <li
            key={task.id}
            className={
              "w-[200px] min-h-[180px] rounded-lg bg-[#197278] text-[#EDDDD4]"
            }
          >
            <div
              className={
                "flex flex-col gap-1 items-center justify-center h-full"
              }
            >
              {isEditing ? (
                <input
                  type="text"
                  className={
                    "bg-[#EDDDD4] w-[50%] p-1  rounded-lg text-[#6E0E0A] outline-none text-lg"
                  }
                  placeholder={task.text}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  autoFocus={true}
                />
              ) : (
                <div className={"font-bold text-xl"}>{task.text}</div>
              )}
              <div>Max Streak: {task.maxStreak}</div>
              <div>Current Streak: {task.currentStreak}</div>
              <div className={"flex items-center justify-center gap-1"}>
                <input type="checkbox" id={"check"} />
                <label htmlFor="check">{date}</label>
              </div>
              <div className={"flex justify-center gap-5 w-full px-3"}>
                {isEditing ? (
                  <button
                    className={"bg-[#772E25] p-[5px] rounded-lg cursor-pointer"}
                    onClick={() => {
                      setIsEditing((prevState) => !prevState);
                      updateStreakItem(text, task.id);
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <>
                    <button
                      className={
                        "bg-[#772E25] p-[5px] rounded-lg cursor-pointer"
                      }
                      onClick={() => {
                        setText(task.text);
                        setIsEditing((prevState) => !prevState);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStreakItem(task.id)}
                      className={
                        "bg-[#772E25] p-[5px] rounded-lg cursor-pointer"
                      }
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
