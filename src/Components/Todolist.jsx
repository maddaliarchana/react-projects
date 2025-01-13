import React from 'react'

const Todolist = ({todo, deleteHandeler}) => {
   
  return (
    <div className='todoList'>
      
      {todo.map((todo,index)=>
      <div key={index} className='taskList'>
        <div className="taskMsg">{todo}</div>
        <div className="deletTask"> 
          <button onClick={()=>deleteHandeler(index)}>Delete</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Todolist
