// import React from 'react'
// import { useState, useEffect } from 'react';
// import TodoForm from './TodoForm';
// import TodoItem from './TodoItem';
// import { fetchTodo, addTodo, deleteTodo, updateTodo } from '../services/api';

// const TodoList = () => {

//     const[todos,setTodos] = useState([]);

//     useEffect(() => {
//         const getTodos = async() => {
//             try {
//                 const todos = await fetchTodo();
//                 setTodos(todos);
//             } catch (error) {
//                 console.log("Error in fetching todos:", error);
//             }
//         };

//         getTodos();
//     }, []);


//     const handleAddTodo = async(title) => {
//         try {
//             const newTodo = {title, completed: false};
//             const addedTodo = await addTodo(newTodo);
//             setTodos([...todos, addedTodo]);
//         } catch (error) {
//             console.log("Error in adding todos", error);
//         }
//     }

//     const handleUpdateTodo = async(id, updatedTodo) => {
//         try {
//             await updateTodo(id, updateTodo);
//             setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
//         } catch (error) {
//             console.log("Error in updating todos", error);
//         }
//     }

//     const handleDeleteTodo = async(id) => {
//         try {
//             await deleteTodo(id);
//             setTodos(todos.filter(todo => todo.id !== id));
//         } catch (error) {
//             console.log("Error in deleting todos", error);
//         }
//     }


//   return (
//     <div>
//     <TodoForm addTodo={handleAddTodo}/>
//     <ul>
//         {todos.map(todo => (
//             <TodoItem key={todo.id} todo={todo} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo}/>
//         ))}
//     </ul>
//     </div>
//   )
// }

// export default TodoList

// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { fetchTodo, addTodo, updateTodo, deleteTodo } from '../services/api';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { toast } from 'react-toastify';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await fetchTodo();
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
        toast.error('Failed to fetch todos.');
      }
    };

    getTodos();
  }, []);

  const handleAddTodo = async (title) => {
    try {
      const newTodo = { title, completed: false };
      const addedTodo = await addTodo(newTodo);
      setTodos([addedTodo,...todos]);
      toast.success('Todo added successfully!');
    } catch (error) {
      console.error('Error adding todo:', error);
      toast.error('Failed to add todo.');
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      await updateTodo(id, updatedTodo);
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
      toast.success('Todo updated successfully!');
    } catch (error) {
      console.error('Error updating todo:', error);
      toast.error('Failed to update todo.');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
      toast.success('Todo deleted successfully!');
    } catch (error) {
      console.error('Error deleting todo:', error);
      toast.error('Failed to delete todo.');
    }
  };

  return (
    <div>
      <TodoForm addTodo={handleAddTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
