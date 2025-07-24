import React from "react";
import Form from "./components/Form.jsx";
import TaskProvider from "./context/Task.jsx";

const App = () => {
  return (
    <TaskProvider>
      <div className={"text-blue-700"}>
        <Form />
      </div>
    </TaskProvider>
  );
};

export default App;
