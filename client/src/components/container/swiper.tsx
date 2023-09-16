import React, { useEffect } from "react";
import Swiper from "swiper";

const GallerySlider = () => {
  // useEffect(() => {
  //   // Initialize Swiper instances
  //   const slider = new Swiper(".gallery-slider", {
  //     slidesPerView: 1,
  //     centeredSlides: true,
  //     loop: true,
  //     loopedSlides: 6,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });

  //   const thumbs = new Swiper(".gallery-thumbs", {
  //     slidesPerView: "auto",
  //     spaceBetween: 10,
  //     centeredSlides: true,
  //     loop: true,
  //     slideToClickedSlide: true,
  //   });

  //   slider.controller.control = thumbs;
  //   thumbs.controller.control = slider;
  // }, []);

  return (
    <div className="gallery">
      <div className="swiper-container gallery-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample010.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample005.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample012.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample007.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample008.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample009.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>

      <div className="swiper-container gallery-thumbs">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample010.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample005.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample012.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample007.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample008.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="//into-the-program.com/demo/images/sample009.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
