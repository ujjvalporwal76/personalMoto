import React, { useState } from "react";
import { AiFillCar, AiTwotoneSetting } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import "./Searchform.css";
import Test from "./Test";


import Searchformlistitem from "./Searchformlistitem";
import Bodytypes from "./Bodytype";

function createBodytypelist(Bodytype) {
  return <Searchformlistitem key={Bodytype.id} bodytype={Bodytype.bodytype1} />;
}
function Searchform() {
  const [dropdownlist, setDropdownlist] = useState("search-category-dropdown-list")
  const [dropdownheadstyle, setDropdownheadstyle] = useState("dropdown-head")
  const [dropdownarrowstyle, setDropdownarrowstyle] = useState("dropdown-arrow-up")
  function showDropDown()
  {
    setDropdownlist("search-category-dropdown-list-show")
    setDropdownheadstyle("dropdown-head-show")
    setDropdownarrowstyle("dropdown-arrow-down")
  }
  return (
    <article id="search-form-section" className="product-search-form-section">
      <ul className="search-form-category-list">
        <li className="search-form-category-list-item">
          <a className="category-nav-item" href="#">
            <span className="category-nav-item-detail">
              <i>
                <AiFillCar size={32} />
              </i>
              <div className="category-nav-item-name-box">
                <p className="category-nav-item-name">Personal</p>
              </div>
            </span>
          </a>
        </li>
        <li className="search-form-category-list-item">
          <a className="category-nav-item" href="#">
            <span className="category-nav-item-detail">
              <i>
                <AiTwotoneSetting size={32} />
              </i>
              <div>
                <p>Parts</p>
              </div>
            </span>
          </a>
        </li>
        <li className="search-form-category-list-item">
          <a className="category-nav-item" href="#">
            <span className="category-nav-item-detail">
              <i>
                <FaMotorcycle size={32} />
              </i>
              <div>
                <p>Motocycle</p>
              </div>
            </span>
          </a>
        </li>
        <li className="search-form-category-list-item">
          <a className="category-nav-item" href="#">
            <span className="category-nav-item-detail">
              <i>
                <BiCategoryAlt size={32} />
              </i>
              <div>
                <p>Personal Categories</p>
              </div>
            </span>
          </a>
        </li>
      </ul>
      <Test />





      
      {/* <fieldset>
        <div className="search-form-box">
          <h1 className="search-form-box-heading">What are you looking for?</h1>
          <form
            action="#"
            method="post"
            autoComplete="off"
            id="home-search-form"
            className="home-search-category-form"
          >
            
            <div className="home-search-form-box">
              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">Body Type</p>
                  <div className="search-form-category-dropdown">
                    <div className={dropdownheadstyle}>
                      <input
                        className="dropdown-head-input"
                        placeholder="Body type"
                      ></input>
                      <button type="button" className="dropdown-show-button" onClick={showDropDown}>
                      <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul
            
                      className={dropdownlist}
                    >
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">Vehicle Brand</p>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="Vehicle Brand"
                      ></input>
                      <button type="button" className="dropdown-show-button" onClick={showDropDown}>
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className={dropdownlist}>
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">Price</p>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="From"
                      ></input>
                      <button type="button" className="dropdown-show-button">
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className="search-category-dropdown-list">
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="Down"
                      ></input>
                      <button type="button" className="dropdown-show-button">
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className="search-category-dropdown-list">
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">
                    Year of Production
                  </p>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="From"
                      ></input>
                      <button type="button" className="dropdown-show-button">
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className="search-category-dropdown-list">
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="Down"
                      ></input>
                      <button type="button" className="dropdown-show-button">
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className="search-category-dropdown-list">
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">Fuel Type</p>
                  <div className="search-form-category-dropdown">
                    <div className="dropdown-head">
                      <input
                        className="dropdown-head-input"
                        placeholder="Fuel type"
                      ></input>
                      <button type="button" className="dropdown-show-button">
                        <SlArrowDown className={dropdownarrowstyle} />
                      </button>
                    </div>
                    <ul className="search-category-dropdown-list">
                      {Bodytypes.map(createBodytypelist)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-form-category">
                <div>
                  <p className="search-form-category-name">Course</p>
                  <div className="search-form-category-dropdown">
                    <div className="double-category-box">
                      <div className="range-from-box">
                        <div className="dropdown-head">
                          <input
                            className="dropdown-head-input"
                            placeholder="From"
                          ></input>
                          <button
                            type="button"
                            className="dropdown-show-button"
                          >
                            <SlArrowDown className={dropdownarrowstyle} />
                          </button>
                        </div>
                        <ul className="search-category-dropdown-list">
                          {Bodytypes.map(createBodytypelist)}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="search-form-category-dropdown">
                    <div className="double-category-box">
                      <div className="range-to-box">
                        <div className="dropdown-head">
                          <input
                            className="dropdown-head-input"
                            placeholder="Down"
                          ></input>
                          <button
                            type="button"
                            className="dropdown-show-button"
                          >
                            <SlArrowDown className={dropdownarrowstyle} />
                          </button>
                        </div>
                        <ul className="search-category-dropdown-list">
                          {Bodytypes.map(createBodytypelist)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </fieldset> */}
    </article>
  );
}

export default Searchform;
