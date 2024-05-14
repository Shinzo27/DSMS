import React from "react";

const TopProducts = () => {
  return (
    <>
      <section class="food" id="food">
        <div class="heading">
          <span>popular dryfruits</span>
          <h3>our expertise!</h3>
        </div>

        <div class="swiper food-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide" data-name="food-1">
              <img src=".\food-img-1.png" alt="" />
              <h3>Cashew</h3>
              <div class="price">₹650/kg</div>
            </div>

            <div class="swiper-slide slide" data-name="food-2">
              <img src=".\food-img-2.png" alt="" />
              <h3>Walnuts</h3>
              <div class="price">₹670/kg</div>
            </div>

            <div class="swiper-slide slide" data-name="food-3">
              <img src=".\food-img-3.png" alt="" />
              <h3>Almonds</h3>
              <div class="price">₹750/kg</div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default TopProducts;
