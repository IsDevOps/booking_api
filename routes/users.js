import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { createUser, loginUser } from "../controllers/authController.js";
import { VerifyToken, verifyUser } from "../util/verifyToken.js";

const router = express.Router();

//CREATE ROUTE
router.post("/register", createUser);
router.post("/login", loginUser);

// VERIFY TOKEN
router.get("/verify", VerifyToken, (req, res) => {
  res.send(`Welcome user, You are loggin `);
});
//-----------------------------------------------------------------------------------------------------

//VERIFY USER
router.get("/verifyUser/:id", verifyUser, (req, res, next) => {
  res.send(`Welcome user, You are loggin with more authorization `);
});
//-----------------------------------------------------------------------------------------------------

//UPDATE ROUTE
router.put("/:id", updateUser);

//DELETE ROUTE
router.delete("/:id", deleteUser);

//GET ALL ROUTE
router.get("/", getAllUser);

//GET ROUTE
router.get("/:id", getUser);
export default router;
