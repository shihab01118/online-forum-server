require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
  CLIENT_URL: process.env.CLIENT_URL,
};

module.exports = config;
