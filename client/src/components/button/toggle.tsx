import React from "react";
import { useState } from "react";

import { FaSun } from "react-icons/fa";

const ToggleTheme: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const toggleDarkMode = () => {
    setToggle(!toggle);
    if (toggle) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <>
      <div className="m-[20px] w-6 dark:text-lightmode dark:bg-darkmode" >
        {<FaSun className="text-2xl" onClick={toggleDarkMode} />}
      </div>
    </>
  );
};
export default ToggleTheme;
