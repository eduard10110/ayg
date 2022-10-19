module.exports = function(req, res, next, err) {
  return res.status(500).json({ message: "Something went wrong" });
}