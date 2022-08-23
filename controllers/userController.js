import userModel from "../models/userModel.js";

//UPDATE USER
export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await userModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ msg: updateHotel });
      } catch (err) {
        next(err)
      }
  };
//--------------------------------------------------------------------------------------------------------

//GET SINGLE USER
  export const getHotel = async (req, res, next) => {
    try {
      const saveHotel = await userModel.findById()
      res.status(200).json({ msg: saveHotel });
    } catch (err) {
      next(err);
    }
  };
  //------------------------------------------------------------------------------------------------------

  // GET ALL USERS
  export const getAllHotel = async (req, res, next) => {
    try {
        const allHotel = await userModel.find();
        res.status(200).json({ msg: allHotel });
      } catch (err) {
        next(err);
      }
  };
//----------------------------------------------------------------------------------------------------------
//DELETE USER
  export const deleteHotel = async (req, res, next) => {
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