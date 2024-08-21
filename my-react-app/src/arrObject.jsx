import { useState } from "react";

// this react program represents how to update array object in a state.

function ArrObject() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((car) => [...car, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCar((car) => car.filter((_, i) => i !== index));
  }

  function HandleYearChange(event) {
    setCarYear(event.target.value);
  }

  function HandleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function HandleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {car.map((c, index) => (
            <li key={index}>
              {c.year} {c.make} {c.model}
              <button onClick={() => handleRemoveCar(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={HandleYearChange} /><br />
        <input type="text" value={carMake} onChange={HandleMakeChange} placeholder="Enter car make" /><br />
        <input type="text" value={carModel} onChange={HandleModelChange} placeholder="Enter car model" /><br />
        <button onClick={handleAddCar}>Add car</button>
      </div>
    </>
  );
}

export default ArrObject;