import React, { useState } from "react";
import { useLocation } from "react-router-dom";


import "../StatisticsPage/Statisticspage.css";


import Navbar from "../../NavBar/Navbar";
import Createaccountbanner from "../../CreateAccountBanner/Createaccountbanner";
import Homefooter from "../../HomeFooter/Homefooter";

import Searchformlistitem from "../../SearchForm/Searchformlistitem";

function Settingspage() {
  const [dropdown, setdropdown] = useState(0);
  const path = useLocation();

  const [category, setCategory] = useState("");
  function handletopupdropdown() {
    setdropdown(!dropdown);
  }

  return (
    <div className="advertisements-page">
      <Navbar />
      <div className="user-pages-header-section">
        <div className="user-pages-header-box">
          <div className="user-pages-header">
            <h1>Account Settings</h1>
            <div className="user-wallet-topup">
              <div className="user-wallet-box">
                <div className="user-wallet">
                  <div className="user-wallet-funds-box">
                    <span className="user-wallet-funds">
                      Funds for Personalmoto: 0 points
                    </span>
                  </div>
                  <div className="user-wallet-topup topup-dropdown">
                    <button
                      type="button"
                      className="wallet-topup-btn"
                      onClick={handletopupdropdown}
                    >
                      <span className="topup-btn-name">Top up</span>
                    </button>

                    <ul
                      className={
                        dropdown ? "wallet-topup-menu" : "topup-dropdown-menu"
                      }
                    >
                      <li className="topup-dropdown-label">
                        Top up Funds on Personalmoto
                      </li>
                      <li>
                        <a href="#" className="wallet-topup-link">
                          From 50 to 149 Points + 0% free
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wallet-topup-link">
                          From 150 to 299 Points + 5% free
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wallet-topup-link">
                          From 300 to 499 Points + 10% free
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wallet-topup-link">
                          From 500 to 3000 Points + 15% free
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="user-pages-header-btns">
            <li className="col-md-2">
              <a
                href="/myaccount-statistics"
                className={
                  path.pathname === "/myaccount-statistics"
                    ? "myaccount-active-link"
                    : "myaccount-link"
                }
              >
                Statistics
              </a>
            </li>
            <li className="col-md-2">
              <a
                href="/myaccount-advertisements"
                className={
                  path.pathname === "/myaccount-advertisements"
                    ? "myaccount-active-link"
                    : "myaccount-link"
                }
              >
                Advertisements
              </a>
            </li>
            <li className="col-md-2">
              <a
                href="/myaccount-news/selling"
                className={
                  path.pathname === "/myaccount-news/selling/selling"
                    ? "myaccount-active-link"
                    : "myaccount-link"
                }
              >
                The news
              </a>
            </li>
            <li className="col-md-2">
              <a
                href="/myaccount-payments"
                className={
                  path.pathname === "/myaccount-payments"
                    ? "myaccount-active-link"
                    : "myaccount-link"
                }
              >
                Payments
              </a>
            </li>
            <li className="col-md-2">
              <a
                href="/myaccount-settings"
                className={
                  path.pathname === "/myaccount-settings"
                    ? "myaccount-active-link"
                    : "myaccount-link"
                }
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
                
      <Createaccountbanner />
      <Homefooter />
    </div>
  );
}

export default Settingspage;
