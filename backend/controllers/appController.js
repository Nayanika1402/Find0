const sendCookie = require("../utils/jwt.js");
const bcrpyt = require("bcryptjs");
const User = require("../models/UserSchema.js");
const { ErrorHandler }= require("../middlewares/error.js");
 
const register = async (req, res, next) => {
  try { 
    const { name, email, password , cpassword , course , collage , phone } = req.body;
    console.log(cpassword);
    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User exist", 400));

    const hashedPassword = await bcrpyt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      cpassword : hashedPassword,
      course,
      collage,
      phone,
    });
    sendCookie(user, res, "Registerd successfully", 201);
  } catch (error) {
    next(error);
  }
};



const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password"); //manually selecting password ..because we have assigned select false in password in user schema

    if (!user) return next(new ErrorHandler("Invalid email or password", 400));

    const isMatch = await bcrpyt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid email or password", 400));

    sendCookie(user, res, `Welcome Back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

const getMyDetail = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: "logout successfully",
    });
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorHandler("Invalid email or password", 400));

    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};



module.exports = {register , login , logout , deleteUser , getMyDetail}