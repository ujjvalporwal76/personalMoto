import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Logoutpage.css";

const handleLoginRedirect = () => {
  window.location.href = "/login";
};
const url = "http://localhost:5000/api/users/logout";
function Logoutpage() {
  const navigate = useNavigate();
  const handleLogoutUser = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });
      if (res) {
        console.log("Successfully logged out");
        localStorage.removeItem("refreshToken");
        //navigating to login page after logout
        navigate("/login");
      }
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleLogoutUser();
  });
  return (
    <div className="logout-page">
      <div className="logout-page-content">
        <h1>Hi, User you are logged out.</h1>
        <Button variant="primary" onClick={handleLoginRedirect}>
          Go to Login page
        </Button>
      </div>
    </div>
  );
}

export default Logoutpage;
