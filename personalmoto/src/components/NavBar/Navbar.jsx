import React from "react";
import { useNavigate, redirect } from "react-router-dom";
import {BiSolidUser, BiLogOut} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
import logo from "../../images/logo.png"
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  function redirectsellerpage(){
    
  navigate('/start-selling');
  }
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-items" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Financing on PersonalMoto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MotorPedia
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/watched-page-ads">
                  Watched
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  <BiLogOut />Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <BiSolidUser /> Log in | Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/myaccount-statistics">
                  <BiSolidUser /> My account
                </a>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-primary" onClick={redirectsellerpage}><AiOutlinePlus /> Start Selling</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
