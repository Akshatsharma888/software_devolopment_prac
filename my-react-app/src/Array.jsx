import { useState } from "react";

// this is how we update the state of an array using react.

function Update_Array() {
  const [food, setFood] = useState(["apple", "mango", "pineapple"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>Lists of Food</h1>
      <ul>
        {food.map((item, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {item}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Update_Array;
