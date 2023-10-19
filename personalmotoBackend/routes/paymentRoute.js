import express from "express";
import paymentController from "../controllers/paymentController.js";
const paymentRoute = express.Router();

paymentRoute.post("/topup", paymentController.checkout);

export default paymentRoute;
