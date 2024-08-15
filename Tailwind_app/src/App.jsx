// tailwind css practice file.

import React, { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleDark = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className="relative p-5">
      <p className="text-center text-lg text-blue-400">Hello world!</p>
      <div className="w-full h-10 bg-violet-200 border-violet-600 rounded-md my-4 p-2 border-2">
        <p className="text-center font-mono font-extrabold">its a div</p>
      </div>
      <div className="fixed h-10 bg-red-500 top-0">
        position example in tailwind
      </div>
      <div className="flex justify-between">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="bg-violet-500 h-12 text-center">grid1</div>
        <div className="bg-violet-500 h-12 text-center">grid1</div>
        <div className="bg-violet-500 h-12 text-center">grid1</div>
      </div>
      <div className="md:block hidden">
        <p>I will appear for device resolution &gt; 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p>I will appear for device resolution &lt; 768px</p>
      </div>
      <button
        className="Special-button"
      >
        Click Me
      </button>
      <ul className="my-2 space-y-2">
        <li className="bg-white p-2 first:bg-yellow-100">item 1</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-400">
          item 2
        </li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-400">
          item 3
        </li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-400">
          item 4
        </li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-400">
          item 5
        </li>
      </ul>

      {/* theme dark below code */}
      <div className="Card">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
          this is a text element
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
          this is an even longer p tag element
        </p>
        <button
          id="toggle-dark"
          onClick={handleToggleDark}
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
        >
          Toggle Dark mode
        </button>
      </div>
      <p className="text-xl p-2 bg-stone-100 text-chested">Chestnut</p>
    </main>
  );
};

export default App;