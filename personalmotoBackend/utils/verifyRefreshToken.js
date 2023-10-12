import refreshToken from "../middleware/token";
import TokenModel from "../models/TokenModule.js";
import Jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_KEY;
  return new Promise((resolve, reject) => {
    TokenModel.findOne({ token: refreshToken }, (err, doc) => {
      if (!doc) {
        return reject({ error: true, message: "Invalid refresh token" });
      }
      Jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err) {
          return reject({
            error: true,
            message: "Invalid refresh token",
          });
        }
        resolve({
          tokenDetails,
          error: false,
          message: "valid refresh token",
        });
      });
    });
  });
};
export default verifyRefreshToken;
