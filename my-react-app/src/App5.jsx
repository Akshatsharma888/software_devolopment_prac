

import List from "./List.jsx";

// in this react app we learned to use render list component.

function App5(){
  const fruits = [
    { id: 1, name: "apple", calories: 56 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 96 },
    { id: 4, name: "coconut", calories: 88 },
    { id: 5, name: "Mango", calories: 90 },
  ];
  const vegans = [
    { id: 6, name: "spinach", calories: 506 },
    { id: 7, name: "brokalli", calories: 40 },
    { id: 8, name: "heing", calories: 9 },
    { id: 9, name: "cabbage", calories: 880 },
    { id: 10, name: "loki", calories: 30 },
  ];
  return (
    <>
    <List items={fruits} category = "fruits"/>
    <List items={vegans} category = "vegetables"/>
    </>
  );
}

export default App5;