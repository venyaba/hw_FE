import { useState } from "react";
import Modal from "./Modal";

function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    openModal();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleNameChange} />
        <input type="email" onChange={handleEmailChange} />
        <button type="submit">send</button>
      </form>
      {modalIsOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Form;
