import React, { useState } from "react";
import Button from "./Button.jsx";
import { useTask } from "../context/Task.jsx";

const Form = () => {
  const [task, setTask] = useState("");
  const { addStreakItem, deleteStreakItem } = useTask();
  return (
    <form className={"w-full flex justify-center mt-5 gap-3"}>
      <input
        type="text"
        value={task}
        className={
          "bg-[#F0F0C9] w-[50%] p-2 rounded-lg text-[#6E0E0A] outline-none text-lg"
        }
        onChange={(e) => setTask(e.target.value)}
      />
      {task.length > 0 && (
        <Button handleClick={deleteStreakItem}>Delete</Button>
      )}
      <Button handleClick={addStreakItem}>Submit</Button>
    </form>
  );
};
export default Form;
