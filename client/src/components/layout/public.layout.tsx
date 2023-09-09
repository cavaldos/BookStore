import React, { ReactNode, useState, Suspense } from "react";

type PublicLayoutProps = {
  children: ReactNode;
};
const Footer = React.lazy(() => import("~/components/footer"));
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
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PublicLayout;
