const jwt = require('jsonwebtoken');

const sendCookie = async (user, res, message, statuscode = 200) => {
  const token = jwt.sign({ _id: user._id }, "fdnfnfnfnfnfnfnfnfn");
  await res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};


module.exports = sendCookie