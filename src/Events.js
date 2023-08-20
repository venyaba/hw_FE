import { useState } from "react";

function Event() {
  const [value, setValue] = useState("");

  function handleKeyUp(e){

    console.log(e.key)
    setValue(e.target.value)
  }

  function handleDown(){
    setValue(false)
  }

  return (
    <div>
      <input type="text"  onKeyDown={handleDown} onKeyUp={handleKeyUp}/>
      {value}
    </div>
  );
}

export default Event;
