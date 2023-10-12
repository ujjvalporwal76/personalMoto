import React, { useState } from "react";

import Products from "./ProductDetails"

import offerposter from "../../images/offerposter1.webp";
import Navbar from "../NavBar/Navbar";
import Sellercard from "../SellerCard/Sellercard"
import Productdetailsection from "../ProductDetailSection/ProductdetailSection"
import Productdescriptionsection from "../ProductDescriptionSection/Productdescriptionsection"
import Createaccountbanner from "../CreateAccountBanner/Createaccountbanner"
import Homefooter from "../HomeFooter/Homefooter"
import Homeproductsection from "../MadeForYouSection/Homeproductsection"
import { Swiper, SwiperSlide } from "swiper/react";
import  { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Productpage.css";

function Productpage() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-full-details-box">
        <div className="product-full-image-slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={offerposter} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="product-preview-image-slider">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={offerposter} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="product-full-desription-box">
            <h2 className="product-name">Audi A8 50 TDI MHEV Quattro Tiptr</h2>
            <section className="product-characteristics">
              <ul className="product-characteristics-list">
                <li className="product-characteristics-list-item">
                  <span>2019</span>
                </li>
                <li className="product-characteristics-list-item">
                  <span>25,000 km</span>
                </li>
                <li className="product-characteristics-list-item">
                  <span>Diesel</span>
                </li>
                <li className="product-characteristics-list-item">
                  <span>1190cc</span>
                </li>
              </ul>
              <div className="product-price">
                <span className="product-price-currency">INR</span>
                <span className="product-price-amount">25,98,325</span>
            </div>
            </section>
            <Sellercard />
        </div>
      </div>
      <Productdetailsection />
      <Productdescriptionsection />
      <Homeproductsection />
      <Createaccountbanner />
      <Homefooter />
    </div>
  );
}

export default Productpage;
