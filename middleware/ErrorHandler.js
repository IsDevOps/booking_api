const ErrorHandler = (err, req, res, next) => {
  return res.status(500).json({ msg: "Error from error handler" });
};
export default ErrorHandler
