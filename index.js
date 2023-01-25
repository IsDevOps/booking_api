import express from 'express';
import mongoose from "mongoose";
import AuthRoute from './routes/auth.js'
import UserRouter from './routes/users.js'
import HotelRoute from './routes/hotels.js'
import ErrorHandler from './middleware/ErrorHandler.js';
import NotFound from './middleware/NotFound.js';
import dotenv from 'dotenv'




const app = express();

const port = process.env.PORT || 5000;

dotenv.config();
const connect = async () => 
{
  try {
    mongoose.connect(process.env.MONGO_DB);
    console.log("Database Connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.off("Disconnected", () => {
  console.log("Disconnected");
});
mongoose.connection.on("Connected", () => {
  console.log("Connected");
});

//MIDDLEWARE
app.use(express.json());

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/hotel", HotelRoute);

app.use(ErrorHandler );
app.use(NotFound);

app.listen(port, () => {
  connect();
  console.log(`Booking API_Server Running on port ${port}!`);
});
