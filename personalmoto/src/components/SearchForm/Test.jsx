import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./Searchform.css";
import "./Test.css";

import Bodytypes from "./Bodytype";
import VehicleBrands from "./Vehiclebrand";
import Fueltypes from "./Fueltype";
import Prices from "./Price";
import Mileages from "./Mileage";
import Years from "./Year";
import Searchformlistitem from "./Searchformlistitem";

function createBodytypelist(Bodytype) {
  return <Searchformlistitem key={Bodytype.id} bodytype={Bodytype.bodytype1} />;
}
function createVehicleBrandlist(Vehiclebrand) {
  return (
    <Searchformlistitem
      key={Vehiclebrand.id}
      vehiclebrand={Vehiclebrand.vehicleBrand}
    />
  );
}

function createFuelTypelist(Fueltype) {
  return <Searchformlistitem key={Fueltype.id} fueltype={Fueltype.fuelType} />;
}

function createPricelist(Price) {
  return <Searchformlistitem key={Price.id} price={Price.price} />;
}

function createMileagelist(Mileage) {
  return <Searchformlistitem key={Mileage.id} mileage={Mileage.mileage} />;
}
function createYearlist(Year) {
  return <Searchformlistitem key={Year.id} year={Year.year} />;
}
const Test = () => {
  const [bodyType, setBodyType] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [yearFrom, setYearFrom] = useState("");

  const handleSearch = () => {
    // Perform search based on selected categories
    // Display search results
  };

  return (
    <div>
      <h1 className="search-form-box-heading">What are you looking for?</h1>
      <div className="search-form-box">
        <div className="search-form-category">
          <p className="search-form-category-name">Body Type</p>
          <div className="search-form-category-box">
            <select
              id="bodyType"
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">Select Body Type</option>
              {Bodytypes.map(createBodytypelist)}
            </select>
          </div>
        </div>

        <div className="search-form-category">
          <p className="search-form-category-name">Vehicle Brand</p>
          <div className="search-form-category-box">
            <select
              id="vehicleBrand"
              value={vehicleBrand}
              onChange={(e) => setVehicleBrand(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">Select Vehicle Brand</option>
              {VehicleBrands.map(createVehicleBrandlist)}
            </select>
          </div>
        </div>
        <div className="search-form-category">
          <p className="search-form-category-name">Price Range</p>
          <div className="search-form-category-box">
            <select
              id="priceFrom"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">From</option>
              {Prices.map(createPricelist)}
            </select>
            <select
              id="priceTo"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">Down</option>
              {Prices.map(createPricelist)}
            </select>
          </div>
        </div>

        <div className="search-form-category">
          <p className="search-form-category-name">Fuel Type</p>
          <div className="search-form-category-box">
            <select
              id="fuelType"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">Select Fuel Type</option>
              {Fueltypes.map(createFuelTypelist)}
            </select>
          </div>
        </div>

        <div className="search-form-category">
          <p className="search-form-category-name">Production Year</p>
          <div className="search-form-category-box">
            <select
              id="yearFrom"
              value={yearFrom}
              onChange={(e) => setYearFrom(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">From</option>
              {Years.map(createYearlist)}
            </select>
            <select
              id="yearTo"
              value={yearTo}
              onChange={(e) => setYearTo(e.target.value)}
              className="search-form-category-dropdown"
            >
              <option value="">Down</option>
              {Years.map(createYearlist)}
            </select>
          </div>
</div>
          <div className="search-form-category">
            <p className="search-form-category-name">Mileage Range</p>
            <div className="search-form-category-box">
              <select
                id="mileageFrom"
                value={mileageFrom}
                onChange={(e) => setMileageFrom(e.target.value)}
                className="search-form-category-dropdown"
              >
                <option value="">From</option>
                {Mileages.map(createMileagelist)}
              </select>
              <select
                id="mileageTo"
                value={mileageTo}
                onChange={(e) => setMileageTo(e.target.value)}
                className="search-form-category-dropdown"
              >
                <option value="">Down</option>
                {Mileages.map(createMileagelist)}
              </select>
            </div>
          </div>
          
          <Button className="search-form-submit-btn">Show Results</Button>
        
      </div>
    </div>
  );
};

export default Test;
