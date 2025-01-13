import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import Todolist from './Todolist'

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] =useState([]);
  const changehandeler=e=>{
    setTask(e.target.value)
   
    
  }
 
  const submitHandeler=e=>{
    e.preventDefault();
    const newTodo =[...todo,task];   
    setTodo(newTodo);
    setTask("");
    console.log(task);
    
  }
  const deleteHandeler=(indexvalue)=>
  {
    confirm();
    const newTodo = todo.filter((todo,index)=>index!==indexvalue);
    setTodo(newTodo);
  }
  return (
    <>
    <Navbar/>
    
    <div className='card'>
      <div className="card-title">
      <h2>Todo Management Application</h2>
      </div>
      <div className="card-body">
     
      <form onSubmit={submitHandeler}>
        <input type="text"
         name="task"
         value={task} 
        onChange={changehandeler}/>

        <input type="submit"
         value="Add Task" 
         
        name="Add"/>

      </form>
      <Todolist todo={todo} deleteHandeler={deleteHandeler}/>

      </div>

    </div>
    
    </>
  )
}

export default Todo
