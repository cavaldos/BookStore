import ToggleTheme from "~/components/button/toggle";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const MemoizedToggleTheme = useMemo(() => {
    return <ToggleTheme />;
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (e: string) => {
    navigate(e.toString());
  };
  return (
    <>
      <header className="w-full  text-gray-700 bg-white  border-gray-100 shadow-sm body-font border-b-[2px] dark:text-light dark:bg-dark">
        <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
          <button className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <h1 className=" font-nunito text-2xl font-bold dark:text-light">
              Book Store
            </h1>
          </button>
          <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <button
              onClick={() => handleNavigate("/")}
              className="mr-5 font-medium hover:text-gray-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/cart")}
              className="mr-5 font-medium hover:text-gray-900"
            >
              Cart
            </button>
            <button
              onClick={() => handleNavigate("/post")}
              className="font-medium hover:text-gray-900"
            >
              Post
            </button>
          </nav>

          <div className="mr-4 mt-[3px] hover:cursor-pointer">
            {MemoizedToggleTheme}
          </div>
          <div className="items-center h-full">
            <button className="mr-5 font-medium hover:text-gray-900">
              Login
            </button>
            <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
