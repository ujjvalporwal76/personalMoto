import React from "react";
import offerProduct from "./offer";
import "./Offercard.css";

function Offercard() {
  return (
    <div className="container offer-card-container">
      <a className="offercard-link" href="#">
        <div className="card">
          <img
            src={offerProduct[0].imgUrl}
            className="card-img-top"
            alt="product-img"
          />
          <div className="card-body">
            <h2 className="card-title offer-product-name">{offerProduct[0].name}</h2>
            <section className="product-characteristics">
                <ul className="product-characteristics-list">
                    <li className="product-characteristics-list-item"><span>{offerProduct[0].year}</span></li>
                    <li className="product-characteristics-list-item"><span>{offerProduct[0].distanceTravelled}</span></li>
                    <li className="product-characteristics-list-item"><span>{offerProduct[0].fuelType}</span></li>
                    <li className="product-characteristics-list-item"><span>{offerProduct[0].power}</span></li>
                </ul>
            </section>
          </div>
        </div>
        <div className="offer-show-container">
            <h2 className="offer-show-heading">Offer of the day</h2>
        </div>
      </a>
    </div>
  );
}

export default Offercard;
