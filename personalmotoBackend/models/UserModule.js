import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
userSchema.set("timestamps", true);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //            console.log(`Password is modified`);
    const hashedPassword = bcrypt.hashSync(this.password, saltRounds);
    this.password = hashedPassword;
  }
  next();
});

// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = Jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_KEY, {
//       expiresIn: "1d",
//     });
//     this.tokens = this.tokens.concat({ refreshToken: token });
//     await this.save();
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

const UserModel = new mongoose.model("User", userSchema);
export default UserModel;
