import React from "react";
import Slider from "~/components/container/slider";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-[#fff] dark:bg-[black] min-h-screen relative min-w-full justify-center text-center">
        <Slider />
      </div>
    </>
  );
};

export default Home;
