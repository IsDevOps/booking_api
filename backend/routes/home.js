import express from "express";
const router = express.Router();

router.get("/", (req, res, err) => {
  const errorStatus = err.status || 200;
  const errorMessage = err.message || "Welcome to Booking app !";
  return res.status(errorStatus).json({
    success: true,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

export default router;
