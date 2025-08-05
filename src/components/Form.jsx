import { useTask } from "../context/Task.jsx";

const Form = () => {
  const { task, setTask, addStreakItem } = useTask();
  return (
    <form
      className={"w-full flex justify-center mt-5 gap-3"}
      onSubmit={(e) => {
        e.preventDefault();
        addStreakItem();
      }}
    >
      <input
        type="text"
        value={task}
        className={
          "bg-[#EDDDD4] w-[50%] p-2 rounded-lg text-[#6E0E0A] outline-none text-lg"
        }
        onChange={(e) => setTask(e.target.value)}
      />
      {task.length > 0 && (
        <button
          type = "button"
          onClick={() => setTask("")}
          className={
            "bg-[#EDDDD4] p-2 rounded-lg text-[#6E0E0A] text-lg cursor-pointer"
          }
        >
          Delete
        </button>
      )}
      <button
        type="submit"
        className={
          "bg-[#EDDDD4] p-2 rounded-lg text-[#6E0E0A] text-lg cursor-pointer"
        }
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
