import React from "react";
import Slider from "~/components/container/slider";
import Swiper from "~/components/container/swiper";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-light dark:bg-[black] min-h-screen relative min-w-full justify-center text-center pb-2">
        <div className="w-[80vw] bg-black flex justify-center text-amber-50 align-middle m-auto relative top-2 h-[40vh] mb-7">
          <Slider />
        </div>
        <div className="w-[80vw]   text-amber-50 align-middle m-auto relative top-2 min-h-[80vh] mb-6 flex flex-col flex-wrap">
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
          <Swiper />
        </div>
      </div>
    </>
  );
};

export default Home;
