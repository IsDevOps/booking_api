
export const createHotel = async (req, res, next) => {
  const createHotel = new hotelModel(req.body);
  try {
    const saveHotel = await createHotel.save();
    res.status(200).json({ msg: saveHotel });
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
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
        next(err)
      }
  };

  export const getHotel = async (req, res, next) => {
    try {
      const saveHotel = await createHotel.save();
      res.status(200).json({ msg: saveHotel });
    } catch (err) {
      next(err);
    }
  };

  export const getAllHotel = async (req, res, next) => {
    try {
        const allHotel = await hotelModel.find();
        res.status(200).json({ msg: allHotel });
      } catch (err) {
        next(err);
      }
  };

  export const deleteHotel = async (req, res, next) => {
    try {
        await hotelModel.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
          res.status(404).send("Record does not exit");
        }
        res.status(200).send("Deleted Successfully");
      } catch (err) {
       next(err)
      }
  };