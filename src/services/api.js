import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/todos';

// fetching function
export const fetchTodo = async() => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        console.log("Error in fetching todos", error);
        throw error;
    }
}

// add todo
export const addTodo = async(todo) => {
    try {
        const response = await axios.post(API, todo);
        return response.data;
    } catch (error) {
        console.log("Error in adding todos", error);
        throw error;
    }
}

// update todo
export const updateTodo = async(id, updateTodo) => {
    try {
        const response = await axios.put(`${API}/${id}`, updateTodo);
        return response.data;
    } catch (error) {
        console.log("Error in updating todos", error);
        throw error;
    }
}

// deleteTodo

export const deleteTodo = async(id) => {
    try {
        await axios.delete(`${API}/${id}`);
        return id;
    } catch (error) {
        console.log('Error in deleting todos', error);
        throw error;
    }
}


