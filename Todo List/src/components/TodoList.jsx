import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [tasks, setTasks] = useState(["Python", "react", "English"]);
  const [newTask, setNewTask] = useState("");

  const [edit, setEdit] = useState();


  function handleAddTask() {

    if (newTask !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  function handleRemoveTask(index) {
    const a = tasks.filter((_, i) => i !== index)
    setTasks(a)
  }

  function handleEditTask(index) {
    document.getElementById('con').style.display = "block"
    var et = [...tasks]
    document.getElementById("input-edit").value = et[index];

    document.getElementById("btn").addEventListener("click", () => {
      et[index] = document.getElementById("input-edit").value;
      if (et[index] !== "") {

        setTasks(et)
        document.getElementById('con').style.display = "none"

      } else {
        alert("use must writte somthing else delete task")
        document.getElementById("input-edit").value = tasks[index];
      }
    })
    console.log()
  }


  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div className='input-container'>

        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter task...' />
        <button onClick={handleAddTask} >Add Task</button><br /><br />
      </div>

      <div id='con' className='input-container' style={{display: 'none'}}>

        <input id='input-edit' type="text" value={edit} onChange={(e) => setEdit(e.target.value)} />
        <button id='btn' >Edit Task</button>
      </div>

      <ol>
        {
          tasks.map((task, index) => (
            <li key={index} >
              <span>{task}</span>
              <span>
                <i onClick={() => handleRemoveTask(index)} className="fa-solid fa-trash"></i>
                <i onClick={() => handleEditTask(index)} className="fa-solid fa-pen-to-square"></i>
              </span>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default TodoList
