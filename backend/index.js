import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './routes/auth.js'
import UserRouter from './routes/users.js'
import HotelRoute from './routes/hotels.js'
import Room from './routes/home.js'



const app = express();
dotenv.config();



const port = process.env.PORT || 3000;
//---------------------------------------------------------------------------------------------------------

const connect = async () => 
{
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
// app.use(cookieParser());
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/hotel", HotelRoute);
app.use("/", Room);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//SERVER CONNECTION
app.listen(port, () => {
  connect();
  console.log(`Booking API_Server Running on port ${port}`);
});
