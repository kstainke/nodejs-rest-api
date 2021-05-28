const User = require("../models/user");

exports.getUserStatus = (req, res, next) => {
  const userId = req.userId;
  if (!userId) {
    const error = new Error("User not authorized.");
    error.statusCode = 401;
    throw error;
  }
  User.findById(userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ status: user.status });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateUserStatus = (req, res, next) => {
  const userId = req.userId;
  const newStatus = req.body.status;
  if (!userId) {
    const error = new Error("User not authorized.");
    error.statusCode = 401;
    throw error;
  }
  User.findById(userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
      }
      user.status = newStatus;
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "Status updated successfully.",
        status: result.status,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
