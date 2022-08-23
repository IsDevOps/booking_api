import userModel from "../models/userModel.js";

//UPDATE USER
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ msg: updateUser });
      } catch (err) {
        next(err)
      }
  };
//--------------------------------------------------------------------------------------------------------

//GET SINGLE USER
  export const getUser = async (req, res, next) => {
    try {
      const getUser = await userModel.findById(req.params.id)
      res.status(200).json({ msg: getUser });
    } catch (err) {
      next(err);
    }
  };
  //------------------------------------------------------------------------------------------------------

  // GET ALL USERS
  export const getAllUser = async (req, res, next) => {
    try {
        const allUser = await userModel.find();
        res.status(200).json({ msg: allUser });
      } catch (err) {
        next(err);
      }
  };
//----------------------------------------------------------------------------------------------------------
//DELETE USER
  export const deleteUser = async (req, res, next) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
          res.status(404).send("Record does not exit");
        }
        res.status(200).send("Deleted Successfully");
      } catch (err) {
       next(err)
      }
  };
  //--------------------------------------------------------------------------------------------------------