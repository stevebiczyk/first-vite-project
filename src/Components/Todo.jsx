import { useState, useRef } from "react";
import "./CSS/Todo.css";
import { useEffect } from "react";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const addTodo = () => {
    setTodos([
      ...todos,
      { number: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task"
          className="todo-input"
        />
        <div
          onClick={() => {
            addTodo();
          }}
          className="todo-add-btn"
        >
          Add
        </div>
        <div className="todo-list"></div>
      </div>
    </div>
  );
};

export default Todo;
