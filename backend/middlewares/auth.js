const jwt = require('jsonwebtoken')
const  User  = require('../models/UserSchema');

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login to your account first",
    });
  }

  const decoded = jwt.verify(token, "fdnfnfnfnfnfnfnfnfn");

  req.user = await User.findById(decoded._id);
  next();
};



module.exports = isAuthenticated;