import React, { useState } from "react";

const TodoList = () => {
  // Initial demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo(""); // clear input
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* Todo Items */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 border rounded">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
