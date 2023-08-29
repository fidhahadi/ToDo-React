import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
 

  const month = new Date().toLocaleDateString('default', { month: 'long' });
  const date = new Date().getDate();

  const [toDos, settoDos] = useState([]); //array to store the state of list of items
  const [toDo, settoDo] = useState(""); //to store the state each individual tast which is stored as string


  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {date}th of {month}🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" onChange={(e) => settoDo(e.target.value)} placeholder="🖊️ Add item..." /> {/* taking each list item from the input and storing in setodo */}
      <i onClick={() => settoDos([...toDos,toDo])} className="fas fa-plus"></i> {/* on clicking the add button, use the spread operator to list the todos one by one and adding to the list */}
    </div>
    <div className="todos">


    {
      toDos.map((value)=> { 
        return(
      <div className="todo">
      <div className="left">
        <input type="checkbox" name="" id="" />
        <p>{value}</p>
      </div>
      <div className="right">
        <i className="fas fa-times"></i>
      </div>
    </div>
        );
    })
    }
    </div>
  </div>
  );
}

export default App;
