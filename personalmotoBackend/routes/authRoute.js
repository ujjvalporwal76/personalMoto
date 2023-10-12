import express from "express";
import { connectToDatabase } from "../db/mongoConnection.js";
import userControllers from "../controllers/authController.js";
var authRoute = express.Router();
connectToDatabase();

authRoute.get("/", (req, res) => {
  res.send("hello from router");
});

authRoute.post("/signup", userControllers.register);

//login route

authRoute.post("/login", userControllers.login);

authRoute.get("/logout", (req, res) => {
  if (req.cookies.accessToken) {
    res.clearCookie("accessToken");
    res.redirect("/");
    return res.status(200).json("user logout");
  } else {
    res.redirect("/api/users/login");
  }
});
export default authRoute;
