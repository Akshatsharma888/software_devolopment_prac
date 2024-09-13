import { useState, useCallback, useEffect, useRef } from "react";

// React project over password genreator to understand diffrent react hooks such as ={useState, useCallback, useEffect, useRef}.

function App3() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const PassRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "zBdVmRkLnTgQwPyXsChZjLpQsFvBnMaNcHtXgVkRb";
    if (number) str += "0123456789";
    if (char) str += "!@#%&*()_+{}[]:;<>,.?/~`^|-=$@!%*#)_[]<>";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, number, char]);

  const copyPassword = useCallback(() => {
    PassRef.current?.select();
    PassRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <>
      <div>
        <div className="max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 pb-16 bg-gray-800 text-black mt-16">
          <h1 className="text-white text-center mt-8 font-bold text-3xl">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              ref={PassRef}
              className="flex flex-1 p-3 mt-4 rounded-md outline-none"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
            />
            <button
              onClick={copyPassword}
              className="bg-blue-600 shrink-0 mt-4 ml-0 p-3 rounded-sm text-white"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2 mt-4">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="ml-2 text-orange-600">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1 ml-4">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="ml-1 text-orange-600">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1 ml-4">
              <input
                type="checkbox"
                defaultChecked={char}
                id="charcterInput"
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              />
              <label htmlFor="charcterInput" className="ml-1 text-orange-600">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App3;