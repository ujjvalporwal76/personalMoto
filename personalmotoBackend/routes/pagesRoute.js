import express from "express";
import pagesController from "../controllers/pagesController.js";
import authenticateUser from "../middleware/authentication.js";
import refreshToken from "../middleware/token.js";

export var pagesRoutes = express.Router();

pagesRoutes.get(
  "/myaccount-statistics",
  authenticateUser,
  pagesController.statistics
);
pagesRoutes.get(
  "/create-ad-page",
  authenticateUser,
  pagesController.createadpage
);

pagesRoutes.post(
  "/create-ad-page",
  authenticateUser,
  pagesController.createadpage
);

export default pagesRoutes;
