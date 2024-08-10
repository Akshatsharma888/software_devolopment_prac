import { useState } from "react";

function HookComponent() {
  const [name, setName] = useState("Guest");
  const [age,setAge] = useState(0);

  // when you use setter function of a stateful variable it will trigger and rerender virtual dom normal variable dont do that.
  const updateName = () => {
    setName('Spongebob.');
  };

  const updateAge = ()=>{
    setAge(age + 3);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Increment Age</button>
      </div>
    </>
  );
}

export default HookComponent;