import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter( {categories, setTasks, select, setSelect} ) {
  // const [ select, setSelect ] = useState("")
  const handleClick = (e) => {
    const filteredTasks = TASKS.filter(task => (task.category === e.target.id))
    setTasks(filteredTasks)
    setSelect(!select)
  }

  return (    
      <div className="categories">
        <h5>Category filters</h5>
        {/* render <button> elements for each category here */}
        {categories.map(category => (<button className={select == true ? "selected" : ""} onClick={handleClick} id={category}>{category}</button>))}
        {/* {categories.map(category => (<button className={select == true ? "selected" : ""} onClick={handleClick} id={category}>{category}</button>))} */}
    </div>
    );
}

export default CategoryFilter;
