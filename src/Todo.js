import Modal from "./Modal";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isEmptyTodo, setIsEmptyTodo] = useState(false);

  const openModal = () => {
    setIsConfirm(true);
  };

  const closeModal = (e) => {
    setIsConfirm(false);
    setIsEmptyTodo(false);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
      setIsConfirm(false);
    } else {
      setIsEmptyTodo(true);
    }
  };

  return (
    <>
      {isConfirm ? (
        <Modal
          closeModal={closeModal}
          addTodo={addTodo}
          isEmptyTodo={isEmptyTodo}
        />
      ) : (
        <div className={styles.todo_container}>
          <h1>React todo App</h1>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              name="todo"
              placeholder="create a new todo"
              value={todo}
              onChange={handleChange}
            />
            <button className="add_button" onClick={openModal}>
              Add
            </button>
          </div>
          <TodoList todos={todos} />
        </div>
      )}
    </>
  );
}

export default Todo;
