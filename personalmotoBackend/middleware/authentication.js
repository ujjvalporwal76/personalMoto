import Jwt from "jsonwebtoken";
import UserModel from "../models/UserModule.js";

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken; // Authorization: 'Bearer TOKEN'
    console.log("auth:" + token);
    if (!token) {
      throw new Error("Authentication failed!, Provide valid Token");
    }
    const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

    console.log(decodedToken._id);

    const userData = await UserModel.findOne({
      _id: decodedToken._id,
    });
    // console.log(userData.email)
    if (!userData) {
      throw new Error("Invalid user");
    }

    req.token = token;
    req.userData = userData;
    req.userID = userData._id;

    next();
  } catch (err) {
    res.status(401).json("Unauthorized:No token provided");
    console.log(err);
  }
};

export default authenticateUser;
