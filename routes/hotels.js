import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

//CREATE ROUTE
router.post("/", createHotel);

//UPDATE ROUTE
router.put("/:id", updateHotel);

//DELETE ROUTE
router.delete("/:id", deleteHotel);

//GET ALL ROUTE
router.get("/", getAllHotel);

//GET ROUTE
router.get("/:id", getHotel);
export default router;
