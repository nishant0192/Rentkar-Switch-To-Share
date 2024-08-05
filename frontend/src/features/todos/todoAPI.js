import axios from 'axios';

const API_URL = 'https://rentkar-switch-to-share.onrender.com';

const fetchTodos = () => axios.get(API_URL);
const addTodo = (newTodo) => axios.post(API_URL, newTodo);
const updateTodo = (id, updatedTodo) => axios.put(`${API_URL}/${id}`, updatedTodo);
const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);

export { fetchTodos, addTodo, updateTodo, deleteTodo };
