import UserModel from "../models/UserModule.js";
import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens.js";

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ message: "Please provide email and password" });
  }
  // 2- check for existing user in the database
  //   UserModel.findOne({ email: email })
  //     .then((userExist) => {
  //       if (userExist) {
  //         return res.status(422).json({ message: "Email already exists" });
  //       }
  //       const user = new UserModel({
  //         email: email,
  //         password: password,
  //       });
  //       //3 - save to db

  //       user
  //         .save()
  //         .then(() => {
  //           res.status(201).json({
  //             message: "user registered",
  //           });
  //         })
  //         .catch(() => res.status(500).json({ message: "unable to register" }));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  try {
    const userExist = await UserModel.findOne({ email: email });
    if (!userExist) {
      let newUser = new UserModel({
        email: email,
        password: password,
      });

      await newUser.save();

      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(422).json({ message: "Email already exist" });
    }
  } catch (e) {
    console.error(e);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .json({ message: "Please provide email and password" });
  }
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      // console.log("validpassword:" + validPassword);
      if (validPassword) {
        const { accessToken, refreshToken } = await generateTokens(user);
        console.log(accessToken, refreshToken);
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 5 * 1000 * 60 * 60,
          sameSite: "none",
          secure: "false",
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 5 * 1000 * 60 * 60,
          sameSite: "none",
          secure: "false",
        });
        return res.status(200).json({
          accessToken,
          refreshToken,
          message: "Logged in Successfully",
        });
      }
    }
    return res.status(400).json("wrong credentials");
  } catch (e) {
    console.error(e);
  }
};

export default { register, login };
