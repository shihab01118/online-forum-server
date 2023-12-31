const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddleswares");
// const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
// const port = process.env.PORT || 5000;

const authenticationRoutes = require("./routes/authentication");
const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const announcementsRoutes = require("./routes/announcements");
const paymentRoutes = require("./routes/payment");
const commentsRoutes = require("./routes/comment");
const reportedCommentsRoutes = require("./routes/ReportedComments");
const tagsRoutes = require("./routes/tags");

applyMiddlewares(app);

app.use(authenticationRoutes);
app.use(usersRoutes);
app.use(postsRoutes);
app.use(announcementsRoutes);
app.use(paymentRoutes);
app.use(commentsRoutes);
app.use(reportedCommentsRoutes);
app.use(tagsRoutes);

app.get("/", (req, res) => {
  res.send("Assignment is coming...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested url is invalid : [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`Assignment is running on port: ${port}`);
//   });
// };

// main();

module.exports = app;
