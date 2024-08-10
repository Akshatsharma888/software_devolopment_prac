

// in this react app we will learn the use of react hooks and usestate function.

// React hook = Special function that allows functional components to use react features without writing class components they are (usestate),(useeffect),(usecontext),(usecallback),(and more...).

// useState = it is an most important React hook that allows the creation of a stateful variable and a setterfunction to update itsvalue in the virtual dom [name,setname];

// import HookComponent from "./hook.jsx";
import Counter from "./counter.jsx";

function  App7(){
  return (<>
  {/* <HookComponent/> */}
  <Counter/>
  </>);
};

export default App7;