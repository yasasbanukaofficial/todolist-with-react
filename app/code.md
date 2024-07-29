'use client'
import React, { useState } from 'react'

const TodoList = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function handleTaskAdd(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }

    return (
        <div className="todolist">
            <h1 className="title">2Do-List</h1>
            <div className="taskInput-section">
                <input type="text" value={newTask} className="inputTask" onChange={handleTaskAdd} placeholder="Enter Your Task" ></input>
                <button className="addBtn" onClick={addTask}>Add</button>
            </div>
            <div className="todolist-container">
                <ol>
                    {task.map((task, index) =>
                        <li key={index}>
                            <div className="task-display">
                                <span className="task">{task}</span>
                                <button className="deleteBtn" onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>

        </div>

    )
}

export default TodoList
