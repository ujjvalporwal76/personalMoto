import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Loginpage.css";

import loginpagebanner from "../../images/loginpagebanner.jpeg";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import Navbar from "../NavBar/Navbar";

const url = "http://localhost:5000/api/users/login";
function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSendLoginData = async (e) => {
    e.preventDefault();

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    });

    const data = await res.json();
    if (res.status === 200) {
      window.alert("successful login");
      console.log(data);
      navigate("/");
    } else if (!email || !password || res.status === 400) {
      window.alert("wrong credentials");
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-page-content">
        <div className="login-page-left-content">
          <div className="login-page-heading">
            <h1>Log in to continue</h1>
          </div>
          <div className="login-box">
            <div className="login-social-options">
              <div className="login-social-option-btns">
                <button className="login-social-btn facebook-btn">
                  <BsFacebook className="login-social-icons" size={25} />
                  Continue via Facebook
                </button>
                <button className="login-social-btn google-btn">
                  <BsGoogle className="login-social-icons" size={25} />
                  Continue via Google Account
                </button>
                <button className="login-social-btn apple-btn">
                  <BsApple className="login-social-icons" size={25} />
                  Continue via Apple Account
                </button>
              </div>
              <div className="login-options-seperator">
                <div className="login-options-separator-line"></div>
                <div className="login-options-separator-text">OR</div>
                <div className="login-options-separator-line"></div>
              </div>
            </div>
            <div className="login-signup-redirect-box">
              <div className="login-signup-redirect-tabs">
                <button className="login-redirect-btn redirect-btn">
                  <Link to="/login" target="_blank">
                    Login
                  </Link>
                </button>
                <button className="signup-redirect-btn redirect-btn">
                  <Link to="/signup" target="_blank">
                    Create Account
                  </Link>
                </button>
              </div>
            </div>
            <div className="email-login-box">
              <div className="email-login-form-box">
                <form
                  id="login-form"
                  className="login-form-class"
                  method="POST"
                  onSubmit={handleSendLoginData}
                  autoComplete="off"
                >
                  <div className="login-email-box">
                    <div>
                      <label className="login-email-label">Email</label>
                      <div className="login-email-input-box">
                        <input
                          className="login-email-input"
                          name="username"
                          type="email"
                          placeholder="Email address"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="login-password-box">
                    <div>
                      <label className="login-password-label">Password</label>
                      <div className="login-email-input-box">
                        <input
                          className="login-password-input"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Password"
                        ></input>
                        <div className="show-password-toggler">
                          <div
                            className="password-toggler-box"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? (
                              <AiOutlineEyeInvisible size={25} />
                            ) : (
                              <AiOutlineEye size={25} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="forget-password-btn">
                    <span>Forgot Password?</span>
                  </button>
                  <button className="login-form-submit-btn" type="submit">
                    <span>Log in</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="login-page-right-content">
          <img src={loginpagebanner} alt="login-banner"></img>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
