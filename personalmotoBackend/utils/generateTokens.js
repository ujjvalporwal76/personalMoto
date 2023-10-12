import Jwt from "jsonwebtoken";
import TokenModel from "../models/TokenModule.js";

const generateTokens = async (user) => {
  try {
    const payload = { _id: user._id };
    const accessToken = Jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
      expiresIn: "1m",
    });
    const refreshToken = Jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {
      expiresIn: "10m",
    });

    const userToken = await TokenModel.findOne({ userId: user._id });
    if (userToken) await userToken.remove();
    await new TokenModel({ userId: user._id, token: refreshToken }).save();
    return { accessToken, refreshToken };
  } catch (error) {
    return error;
  }
};

export default generateTokens;
