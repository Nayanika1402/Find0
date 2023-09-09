const sendCookie = require("../utils/jwt.js");
const bcrpyt = require("bcryptjs");
const User = require("../models/UserSchema.js");
const Internship = require("../models/InternshipSchema.js");
const Hackathon = require("../models/HackthonSchema.js");
const { ErrorHandler } = require("../middlewares/error.js");

const register = async (req, res, next) => {
  try {
    const { name, email, password, cpassword, course, collage, phone } =
      req.body;
    console.log(cpassword);
    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User exist", 400));

    const hashedPassword = await bcrpyt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      cpassword: hashedPassword,
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

const createInternships = async (req, res, next) => {
  try {
    const { role, companyName, imgUrl, link } = req.body;
    let user = await Internship.findOne({ link });
    if (user) return next(new ErrorHandler("Internship exist", 400));
    user = await Internship.create({
      role,
      companyName,
      imgUrl,
      link,
    });
    res.status(200).json("Internship Added!");
  } catch (error) {
    next(error);
  }
};

const getInternships = async (req, res, next) => {
  try {
    let user = await Internship.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createHackathon = async (req, res) => {
  const { hackathonName, mainTechStack, sideTechStack, imgUrl, link } =
    req.body;
  let hackathon = await Hackathon.findOne({ link });
  if (hackathon) {
    return res.status(401).json("Hackathon Exists");

  }
  try {
    const newHackathon = new Hackathon({
      hackathonName,
      mainTechStack,
      sideTechStack,
      imgUrl,
      link,
    });
    await newHackathon.save();
    res.status(201).json(newHackathon);
  } catch (error) {
    console.error("Error creating hackathon:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getHackathon = async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (error) {
    console.error("Error getting hackathons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  logout,
  deleteUser,
  getMyDetail,
  createInternships,
  getInternships,
  getHackathon,
  createHackathon,
};
