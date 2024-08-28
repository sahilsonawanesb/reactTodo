import React from 'react';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleToggle = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(todo.id, updatedTodo);
    toast.success('Todo status updated!');
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.success('Todo deleted successfully!');
  };


  return (
    <div className='todoItem-container'>
        <div className='todoCenter-container'>
        
        <li className='list-style'>
        {/* <input type="" checked={todo.completed} onChange={handleToogle} /> */}
      
        {todo.title}
        
    </li>
    <button className="delete-btn"onClick={handleDelete}>Delete</button>
        </div>
    
    </div>

      
  );
};

export default TodoItem