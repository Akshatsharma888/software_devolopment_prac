import { useState } from "react";

// react project over bg changer to improve usestate concepts.

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (selected_color) => {
    setColor(selected_color);
  };

  return (
    <div
      style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-16 bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => changeColor('red')} className="bg-red-500 rounded-md px-8 py-2">Red</button>
          <button onClick={() => changeColor('green')} className="bg-green-500 rounded-md px-8 py-2">Green</button>
          <button onClick={() => changeColor('white')} className="bg-white rounded-md px-8 py-2 border">White</button>
          <button onClick={() => changeColor('black')} className="bg-black rounded-md px-8 py-2 text-white">Black</button>
          <button onClick={() => changeColor('blue')} className="bg-blue-500 rounded-md px-8 py-2">Blue</button>
          <button onClick={() => changeColor('gray')} className="bg-gray-500 rounded-md px-8 py-2 text-white">Gray</button>
        </div>
      </div>
    </div>
  );
}

export default App;