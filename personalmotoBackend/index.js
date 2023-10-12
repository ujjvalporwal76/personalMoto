import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./db/mongoConnection.js";
import authRoute from "./routes/authRoute.js";
import pagesRoutes from "./routes/pagesRoute.js";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", authRoute);
app.use("/api/pages", pagesRoutes);

connectToDatabase().then(() => console.log("Connected to MongoDB"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
