import React from "react";
import Task from "./Task";

function TaskList( props ) {
// console.log(categories, tasks);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {props.tasks.map((task) => (
        <Task categories={ props.categories } tasks={ props.tasks } setTasks={ props.setTasks } task={ task } />
      ))}
      
    </div>
  );
}

export default TaskList;
