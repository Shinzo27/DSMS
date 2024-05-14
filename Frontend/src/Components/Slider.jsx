import React from "react";


const Slider = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide slide"
              style="background: url(.\home-slide-1.jpg) no-repeat;"
            >
              <div className="content">
                <span>Healthy Dryfruit</span>
                <h3>Wealthy Life</h3>
                <a href="Product.php" className="btn">
                  get started
                </a>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style="background: url(.\home-slide-2.jpg) no-repeat;"
            >
              <div className="content">
                <span>Need Spices?</span>
                <h3>We have it too!</h3>
                <a href="Product.php" className="btn">
                  get started
                </a>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style="background: url(.\home-slide-3.jpg) no-repeat;"
            >
              <div className="content">
                <span>Morning Breakfast?</span>
                <h3>Have A Namkeen!</h3>
                <a href="Product.php" className="btn">
                  get started
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default Slider;
