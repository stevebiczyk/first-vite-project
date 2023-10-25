import "./CSS/TodoItems.css";
import not_tick from "./Assets/not_tick.png";
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({ number, display, text, setTodos }) => {
  const toggleTick = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].number === number) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        localStorage.setItem("todos", JSON.stringify(data));
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div className="todoitems">
      <div
        className={`todoitems-containe ${display}`}
        onClick={() => {
          toggleTick(number);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt="" />
    </div>
  );
};

export default TodoItems;
