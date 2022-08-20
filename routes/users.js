import express from 'express';
import { createUser, loginUser } from '../controllers/authController.js';
const router = express.Router();

router.post("/register", createUser)
router.put('/:id', loginUser)
 

export default router