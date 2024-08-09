// props = it stands forread only- properties in react the are formed as key-value pairs that are shared between components a parent component can send data to child component component key=value.

import Student from "./Student.jsx";

function App3(){
  return(
    <>
    <Student  name="Akshat" age={20}/>
    <Student  name="Brocode" age={30}/>
    <Student  name="hello" age={100}/>
    <Student  name="sandy" age= {108}/>
    <Student/>
    </>
  );
}

export default App3;