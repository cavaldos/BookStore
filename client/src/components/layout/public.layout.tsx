import React, { ReactNode, useState } from "react";

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
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
      <h1 className="">Public Layout</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
      <div>{children}</div>
    </>
  );
};

export default PublicLayout;
