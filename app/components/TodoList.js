'use client'
import React, { useState } from 'react'

const TodoList = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleTaskChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }

    return (
        <>
            <div className='todolist'>
                <h1>2Do-List</h1>
                <div className='todolistInput-container'>
                    <input className="inputTask" type="text" onChange={handleTaskChange} value={newTask} placeholder='Enter Your Task'></input>
                    <button onClick={addTask} className='addBtn'>Add Task</button>
                </div>
                <p className='error'></p>
                <div className='task-display'>
                    <ol>
                        {task.map((task, index) =>
                            <li key={index}>
                                <span className='task'>{task}</span>
                                <button onClick={() => deleteTask(index)} className='deleteBtn'>Delete</button>
                            </li>)}
                    </ol>
                </div>
            </div>
        </>
    )

}

export default TodoList
