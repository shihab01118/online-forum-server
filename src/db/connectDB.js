const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connnectionURI;

  if (process.env.NODE_ENV === "development") {
    connnectionURI = process.env.DATABASE_LOCAL;
    connnectionURI = connnectionURI.replace(
      "<username>",
      process.env.DATABASE_LOCAL_USERNAME
    );
    connnectionURI = connnectionURI.replace(
      "<password>",
      process.env.DATABASE_LOCAL_PASSWORD
    );
  } else {
    connnectionURI = process.env.DATABASE_PROD;
  }

  return connnectionURI;
};

const connectDB = async () => {
  console.log("connecting to database...");
  const uri = getConnectionString();
  await mongoose.connect(uri, { dbName: process.env.DB_Name });
  console.log("connected to database");
};

module.exports = connectDB;
