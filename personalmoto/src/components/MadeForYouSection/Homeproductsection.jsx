import React from "react";
import "./Homeproductsection.css";
import MadeforyouProducts from "./Madeforyouproduct";
import Homeproductcard from "./Homeproductcard";

function createProductCard(MadeforyouProduct)
{
    return (
        <Homeproductcard
          key={MadeforyouProduct.id}
          image={MadeforyouProduct.imgUrl}
          name={MadeforyouProduct.name}
          year={MadeforyouProduct.year}
          fuelType={MadeforyouProduct.fuelType}
          distanceTravelled={MadeforyouProduct.distanceTravelled}
          power={MadeforyouProduct.power}
          price={MadeforyouProduct.price}
        />
      );
}
function Homeproductsection() {
  return (
    <section className="home-product-section">
      <div className="home-product-header">
        <h2 className="home-product-heading">Made for you</h2>
        <div className="show-home-product-link">
          <a className="feaute-products-link" href="#">
            see all
          </a>
        </div>
      </div>
      <div className="home-product-row">
      {MadeforyouProducts.map(createProductCard)}
      </div>
      
    </section>
  );
}
export default Homeproductsection;
