import React from 'react'
import { useState } from 'react';
import "../App.css";



const TodoForm = ({addTodo}) => {

    const[title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim()){
            addTodo(title);
            setTitle('');
        }
    }



  return (
    <div className='input-container'>
        <h2>Todo App</h2>
        
    <form onSubmit={handleSubmit}>
        <input className='input-box-todo'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add new todo'

        />
        <button className='add-btn' type="submit">Add</button>
    </form>
    </div>
  )
}

export default TodoForm;