require("dotenv").config();

const clearCookie = async (req, res) => {
  const user = req.body;
  
  res
    .clearCookie("token", {
      httpOnly: true,
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};

module.exports = clearCookie;