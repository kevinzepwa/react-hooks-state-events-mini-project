import React, { useState } from "react";

function Task( {task, tasks, setTasks} ) {
  // console.log(props.categories)
  function handleDelete () {
    const filteredItems = tasks.filter(item => item.text !== task.text)
    setTasks(filteredItems)
  }
  
  return (
    <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button onClick={handleDelete} className="delete">X</button>
      </div>
  );
}

export default Task;
