const clearCookie = async (req, res) => {
  const user = req.body;
  console.log("logging out --->", user);
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