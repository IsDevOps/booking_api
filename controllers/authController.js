import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const users = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const saveUsers = await users.save();
    res.status(200).send({ message: "User Created", saveUsers });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json("Not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next("Invalid username/password");
    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
