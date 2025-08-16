import React, { useState } from "react";
import { useTask } from "../context/Task.jsx";
const List = () => {
  const { streakItem, deleteStreakItem, updateStreakItem } = useTask();
  const currentDate = new Date();
  const date = currentDate.toDateString();
  const [editingId, setEditingId] = useState(null);
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
              {editingId === task.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateStreakItem(text, task.id);
                    setEditingId(null);
                  }}
                >
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
                </form>
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
                {editingId === task.id ? (
                  <button
                    className={"bg-[#772E25] p-[5px] rounded-lg cursor-pointer"}
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
                        setEditingId(task.id);
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
