import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
 

  const month = new Date().toLocaleDateString('default', { month: 'long' });
  const date = new Date().getDate();

  const [toDos, settoDos] = useState([]); //array to store the state of list of items
  const [toDo, settoDo] = useState(""); //to store the state each individual tast which is stored as string

  const removeItem = (id)=>{
    const newTodoItems = toDos.filter(item => item.id !== id)
  settoDos(newTodoItems)

  }

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
      <i onClick={() => settoDos([...toDos,{id: Date.now(), text: toDo, status : false}])} className="fas fa-plus"></i> {/* on clicking the add button, use the spread operator to list the todos one by one and adding to the list */}
    </div>
    <div className="todos">
    {
      toDos.map((obj)=> { 
        return(
          <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked);
                console.log(obj);
                settoDos(toDos.filter(obj2=>{
                  if(obj2.id === obj.id){
                    obj2.status = e.target.checked;
                  }
                  return obj2;
                }))

              }} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => removeItem(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        );
    })}
     {
                  toDos.map((obj)=>{
                    if(obj.status){
                      return (<><h1>Active Tasks</h1>
                      <h3 className='text-color:white'>{obj.text}</h3></>);
                    }
                    return null;
                  })
                }
    </div>
  </div>
  );
}

export default App;
