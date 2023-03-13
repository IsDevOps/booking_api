import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//CREATE USER
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

//ALLOW USER TO LOGIN
export const loginUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ msg: "User Not found" });

    //CHECKING THE CURRENT PASSWORD WITH THE EXISTING PASSWORD IN THE DATABASE
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res.status(504).send("Invalid username/password");

    const token = jwt.sign(
      { isAdmin: user.isAdmin, id: user._id },
      process.env.SECRET_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, {
      httpOnly: true,
    });
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
