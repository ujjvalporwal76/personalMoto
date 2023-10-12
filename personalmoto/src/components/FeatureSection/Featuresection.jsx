import React from "react";
import Productcard from "../ProductCard/Productcard";
import "./Featuresection.css";
import Products from "../ProductCard/Product";

function createProductCard(Product) {
  return (
    <Productcard
      key={Product.id}
      image={Product.imgUrl}
      name={Product.name}
      year={Product.year}
      fuelType={Product.fuelType}
      distanceTravelled={Product.distanceTravelled}
      power={Product.power}
      price={Product.price}
    />
  );
}

function Featuresection() {
  return (
    <section className="feature-product-section">
      <div className="feaute-product-header">
        <h2 className="feauted-product-heading">Featured Offers</h2>
        <div className="show-feature-product-link">
          <a className="feaute-products-link" href="#">see all</a>
        </div>
      </div>
      <div>
      {Products.map(createProductCard)}
      </div>
      
    </section>
  );
}

export default Featuresection;
