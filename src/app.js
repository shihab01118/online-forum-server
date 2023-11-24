const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddleswares");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

applyMiddlewares(app);

app.get("/health", (req, res) => {
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

app.listen(port, () => {
  console.log(`Assignment is running on port: ${port}`);
});
