import React, { useEffect, useState } from "react";
import axios from "../../axios/axios.config";
import "./Offercard.css";
// import { Col, Row, Flex } from "antd";
function Offercard() {
  const [productDetails, setProductDetails] = useState([]);
  const [offerProduct, setOfferProduct] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    handleAllProducts();
  }, []);

  const handleAllProducts = async () => {
    try {
      const response = await axios.get("/allproducts", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      });

      const data = response.data;
      setProductDetails(data);
      const offerProduct = getOfferProduct(data);
      setOfferProduct(offerProduct);
    } catch (error) {
      // console.log(error);
    }
  };

  const getOfferProduct = (productDetails) => {
    const offerProduct = productDetails.find(
      (Product) => Product.adtype === "toprated"
    );
    // console.log(offerProduct);
    return offerProduct;
  };

  // Render content only when offerProduct is available
  return (
    <div className="offer-product-section">
      <div className="container offer-card-container">
        <a className="offercard-link" href={`/product/${offerProduct._id}`}>
          {offerProduct.title && (
            <div className="card">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/Images/${offerProduct.images[0]}`}
                className="card-img-top"
                alt="product-img"
              />
              <div className="card-body">
                <h2 className="card-title offer-product-name">
                  {offerProduct.title}
                </h2>
                <section className="product-characteristics">
                  <ul className="product-characteristics-list">
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.productionYear}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.mileage}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.fuelType}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.power}</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          )}
          <div className="offer-show-container">
            <h2 className="offer-show-heading">Offer of the day</h2>
          </div>
        </a>
      </div>

      {/* <div className="container offer-card-container">
        <a className="offercard-link" href={`/product/${offerProduct._id}`}>
          {offerProduct.title && (
            <div className="card">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/Images/${offerProduct.images[0]}`}
                className="card-img-top"
                alt="product-img"
              />
              <div className="card-body">
                <h2 className="card-title offer-product-name">
                  {offerProduct.title}
                </h2>
                <section className="product-characteristics">
                  <ul className="product-characteristics-list">
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.productionYear}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.mileage}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.fuelType}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.power}</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          )}
          <div className="offer-show-container">
            <h2 className="offer-show-heading">Offer of the day</h2>
          </div>
        </a>
      </div>

      <div className="container offer-card-container">
        <a className="offercard-link" href={`/product/${offerProduct._id}`}>
          {offerProduct.title && (
            <div className="card">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/Images/${offerProduct.images[0]}`}
                className="card-img-top"
                alt="product-img"
              />
              <div className="card-body">
                <h2 className="card-title offer-product-name">
                  {offerProduct.title}
                </h2>
                <section className="product-characteristics">
                  <ul className="product-characteristics-list">
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.productionYear}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.mileage}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.fuelType}</span>
                    </li>
                    <li className="offer-product-characteristics-list-item">
                      <span>{offerProduct.power}</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          )}
          <div className="offer-show-container">
            <h2 className="offer-show-heading">Offer of the day</h2>
          </div>
        </a>
      </div> */}
    </div>
  );
}

export default Offercard;
