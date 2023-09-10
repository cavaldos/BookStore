import React, { useState } from "react";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <div className={`bg-[#fff] dark:bg-[black]`}>
        <h1 className={`text-xl dark:text-[#fff]`}>My fdsApp</h1>
        <p className={`text-[black] dark:text-[#fff]`}>Welcome to my app!</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </>
  );
};

export default Home;
