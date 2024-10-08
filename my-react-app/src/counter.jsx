
import { useState } from "react";


function Counter(){

  const [count, setCount] = useState(0);

  const Increment = ()=>{
    setCount(count + 1);
    // setCount(c=> c+1);this is another way to update val in counters. as it allows for safer updates.
  }
  const Decrement = ()=>{
    setCount(count - 1);
  }
  const Reset = ()=>{
    setCount(0);
  }
  return (
    <>
    <div className="counter-div">
      <p className="count-display">{count}</p>
      <button className="counterButton" onClick={Decrement}>Decrement</button>
      <button className="counterButton" onClick={Reset }>Reset </button>
      <button className="counterButton" onClick={Increment}>Increment</button>
    </div>
    </>
  );
}

export default Counter;