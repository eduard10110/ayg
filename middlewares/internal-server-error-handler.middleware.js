module.exports = function(req, res, next) {
  return res.status(500).json({ message: "Something went wrong" });
}