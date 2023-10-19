import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./db/mongoConnection.js";
import authRoute from "./routes/authRoute.js";
import pagesRoutes from "./routes/pagesRoute.js";
import authenticateUser from "./middleware/authentication.js";
import tokenRouter from "./routes/tokenRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import productRoute from "./routes/productRoute.js";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  " Access-Control-Expose-Headers": "Authorization",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", authRoute);
app.use("/api/product", productRoute);
app.use("/api/refresh", tokenRouter);
app.use(authenticateUser);
app.use("/api/pages", pagesRoutes);

app.use("/api/pay", paymentRoute);
connectToDatabase().then(() => console.log("Connected to MongoDB"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
