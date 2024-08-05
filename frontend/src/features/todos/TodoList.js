import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from './todoSlice';
import TodoForm from '../../components/TodoForm';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (todo) => {
    dispatch(updateTodo({
      id: todo._id,
      updatedTodo: { ...todo, completed: !todo.completed },
    }));
  };

  return (
    <div>
      <TodoForm />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {todos.map((todo) => (
        <div key={todo._id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => handleToggleComplete(todo)}>
            {todo.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
