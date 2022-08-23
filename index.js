import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/auth.js";
import UserRouter from "./routes/users.js";
import HotelRoute from "./routes/hotels.js";
import ErrorHandler from "./middleware/ErrorHandler.js";
import NotFound from "./middleware/NotFound.js";
import cookieParser from "cookie-parser";
//---------------------------------------------------------------------------------------------------------

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
//---------------------------------------------------------------------------------------------------------

//MONGODB CONNECTION
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB);
    console.log("Database Connected");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("Disconnected", () => {
  console.log("Disconnected");
});
mongoose.connection.on("Connected", () => {
  console.log("Connected");
});
//-----------------------------------------------------------------------------------------------------------

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/hotel", HotelRoute);

app.use(ErrorHandler);
app.use(NotFound);

//SERVER CONNECTION
app.listen(port, () => {
  connect();
  console.log(`Booking API_Server Running on port ${port}!`);
});
