// Conditional Rendering = it allows you to control what gets rendered in your application based on certain condition(show,hide or change components.)


import UserGreeting from "./Greetings.jsx";

function App4() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="BroCode" />
    </>
  );
}

export default App4;
