import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [ tasks, setTasks ] = useState(TASKS)
  const [ select, setSelect ] = useState("")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES } setTasks={ setTasks } select={ select } setSelect={ setSelect } />
      <NewTaskForm categories={ CATEGORIES } />
      <TaskList categories={ CATEGORIES } tasks={ tasks } setTasks={ setTasks } />
    </div>
  );
}

export default App;
