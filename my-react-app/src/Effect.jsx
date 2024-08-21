import { useEffect, useState } from "react";
// useEffect() React Hook that tells React to DO THIS CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value
// useEffect(function, I [dependencies])
// 1. useEffect(() => { }) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function Use_Effect(){

  const [count,setCount] = useState(0);
  const [color,setColor] = useState(['green'])

  useEffect(()=>{
    document.title = `Count: ${count}`;
  },[count]);

  function updateCount(){
    setCount(c=> c + 1);
  }

  function ChangeColor(){
    setColor(c => c === 'green' ? "red": "green");
  }
  return(
  <>
  <div>
    <p style={{color:color}}>count: {count}</p>
    <button onClick={updateCount}>Add</button>
    <button onClick={ChangeColor}>Change color.</button>
  </div>
  </>
  );
}

export default Use_Effect;