import { useState } from "react";
import styles from "./Modal.module.css";

function Modal(props) {
  const { closeModal, addTodo, isEmptyTodo } = props;

  return (
    <div className={styles.modal_wrapper} onClick={()=>closeModal()}>
    <div className={styles.modal}>
      {isEmptyTodo ? (
        <div className={styles.actions}>
          <span className={styles.worning}>Заполните все поля!</span>
          <button onClick={() => closeModal()}>выход</button>
        </div>
      ) : (
        <>
          <span> Подтвердите ваш запрос</span>
          <div className={styles.actions}>
            <button onClick={() => addTodo()}>подтвердить</button>
            <button onClick={() => closeModal()}>выход</button>
          </div>
        </>
      )}
    </div>
    </div>

  );
}

export default Modal;
