

// this is how we handle click events in react.
function ClickButton(){
  // const handleClick = ()=> console.log("ouch");
  // const handleClick2 = (name)=> console.log(`${name} stop clicking me!`)
  // let count = 0;
  // const handleClick = (name) =>{
  //   if (count < 3){
  //     count++;
  //     console.log(`${name} bro you clicked me ${count} times/s`)
  //   }
  //   else{
  //     console.log(`${name} bro stop clicking me`)
  //   }
  // }

  // e it is an event object used to access various events.
  const handleClick = (e) => e.target.textContent = "ouch #";
  return (
    <button onDoubleClick={(e)=> handleClick(e)}>Click Me @</button>
  );
};

export default ClickButton;