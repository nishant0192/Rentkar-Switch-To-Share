import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "./todoSlice";
import TodoForm from "../../components/TodoForm";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (todo) => {
    dispatch(
      updateTodo({
        id: todo._id,
        updatedTodo: { ...todo, completed: !todo.completed },
      })
    );
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      <TodoForm />
      <div className="flex flex-col bg-[#272727]">
        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>{error}</div>}
        {todos.map((todo) => (
          <div key={todo._id} className="flex items-center my-2 border-b pb-2">
            <div className="flex-grow min-w-0 ml-2">
              <span
                className="block truncate"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </div>
            <div className="flex ml-4">
              <button 
                className="bg-black rounded-[10px] text-white px-4 py-1 mx-2" 
                onClick={() => handleToggleComplete(todo)}
              >
                {todo.completed ? "Incomplete" : "Complete"}
              </button>
              <button 
                className="bg-black rounded-[10px] text-white px-4 py-1 mx-2" 
                onClick={() => handleDelete(todo._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
