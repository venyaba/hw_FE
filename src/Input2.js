import { useState } from "react";

function Input() {
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function onHover() {
    localStorage.setItem("name", value);
    console.log(localStorage)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      {<div onMouseOver={onHover}>{value}</div>}
    </>
  );
}

export default Input;
