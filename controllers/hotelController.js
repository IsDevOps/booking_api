
export const createHotel = async (req, res, next) => {
  const createHotel = new hotelModel(req.body);
  try {
    const saveHotel = await createHotel.save();
    res.status(200).json({ msg: saveHotel });
  } catch (err) {
    next(err);
  }
};
