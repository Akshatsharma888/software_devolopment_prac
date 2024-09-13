import { useState } from "react";

// it is an assignment over use state hook exercise by chai with react.

function App_1() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const subtractValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <p style={{ color: 'white' }} >{count}</p>
      <button style={{ backgroundColor: 'white' }} onClick={addValue}>Add Value</button>
      <button style={{ backgroundColor: 'white' }} onClick={subtractValue}>Decrease Value</button>
    </>
  );
}

export default App_1;