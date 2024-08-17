import { useState } from "react";

function Update() {
  const [car, setCar] = useState({
    year: 2020,
    Name: "cv100",
    model: "mustang",
  });

  function HandleYearChange(event) {
    // (...x ) = this is also known as spread operator which help in not changing the current target value as it maintains the taget value whenever we update a function.
    // (x=>()) this is an another convention to update a reac function without affecting its previous state.
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function HandleNameChange(event) {
    setCar((c) => ({ ...c, Name: event.target.value }));
  }

  function HandleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        your favourite car is {car.year} {car.model} {car.Name}
      </p>
      <input type="number" value={car.year} onChange={HandleYearChange} />
      <br />
      <input type="text" value={car.Name} onChange={HandleNameChange} />
      <br />
      <input type="text" value={car.model} onChange={HandleModelChange} />
    </div>
  );
}

export default Update;