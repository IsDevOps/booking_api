import express from 'express';
import { createHotel } from '../controllers/hotelController.js';
const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await hotelModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: updateHotel });
  } catch (err) {
    res.status(500).json({ msg: "Updated Successfully" });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await hotelModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(404).send("Record does not exit");
    }
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res, next) => {
  try {
    const allHotel = await hotelModel.find();
    res.status(200).json({ msg: allHotel });
  } catch (err) {
    next(err);
  }
});

//GET
router.get("/:id", async (req, res, next) => {
  try {
    const allHotel = await hotelModel.findById("fjfjru");
    res.status(200).json({ msg: allHotel });
  } catch (err) {
    next(err);
  }
});
export default router