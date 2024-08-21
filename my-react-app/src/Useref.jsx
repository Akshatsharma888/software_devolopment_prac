import { useEffect, useRef } from "react";

// useState() = Re-renders the component when the state value changes

// @ useRef() = "use Reference" Does not cause re-renders when its value changes.
// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

function UseRef_Component() {
  const Ref = useRef(0);

  useEffect(() => {
    console.log('component_rendered');
  }, []);

  function handleClick() {
    Ref.current++;
    console.log(Ref.current)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>click me!</button>
      </div>
    </>
  );
}

export default UseRef_Component;