import { useState, useRef } from "react";
import "./CSS/Todo.css";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

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
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
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
        <div className="todo-list">
          {todos.map((item, index) => {
            return (
              <TodoItems
                key={index}
                setTodos={setTodos}
                number={item.number}
                display={item.display}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
