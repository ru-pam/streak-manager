import React from "react";
import Form from "./components/Form.jsx";
import TaskProvider from "./context/Task.jsx";
import List from "./components/List.jsx";

const App = () => {
  return (
    <TaskProvider>
      <div className={"text-blue-700"}>
        <Form />
        <List/>
      </div>
    </TaskProvider>
  );
};

export default App;
