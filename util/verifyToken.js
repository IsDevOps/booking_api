import jwt from "jsonwebtoken";
import { CreateError } from "../middleware/Errorhandler.js";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(CreateError(401, "You are not authenticated"));



  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(CreateError(403, "Token is not valid"));
    req.user = user;
    next();
  });
};
