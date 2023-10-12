import express from "express";
import Jwt from "jsonwebtoken";
import TokenModel from "../models/TokenModule.js";
import verifyRefreshToken from "../utils/verifyRefreshToken.js";

const tokenRouter = express.Router();

tokenRouter.post("/", async (req, res) => {
  verifyRefreshToken(req.body.refreshToken)
    .then(({ tokenDetails }) => {
      const payload = {
        _id: tokenDetails._id,
      };
      const accessToken = Jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "1m",
      });
      return res
        .status(200)
        .json({ accessToken, message: "Access token created successfully" });
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
});
