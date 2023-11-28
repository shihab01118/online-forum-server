const mongoose = require("mongoose");
require("dotenv").config();

// const getConnectionString = () => {
//   let connnectionURI;

//   if (process.env.NODE_ENV === "development") {
//     connnectionURI = process.env.DATABASE_LOCAL;
//     connnectionURI = connnectionURI.replace(
//       "<username>",
//       process.env.DATABASE_LOCAL_USERNAME
//     );
//     connnectionURI = connnectionURI.replace(
//       "<password>",
//       process.env.DATABASE_LOCAL_PASSWORD
//     );
//   } else {
//     connnectionURI = process.env.DATABASE_PROD;
//   }

//   return connnectionURI;
// };

const connectDB = async () => {
  console.log("connecting to database...");
  // const uri = getConnectionString();
  const uri = "mongodb+srv://discussHub:4NZ3F9IawZi6uLUD@cluster0.jcpqyde.mongodb.net"
  await mongoose.connect(uri, { dbName: "discussHubDB" });
  console.log("connected to database");
};

module.exports = connectDB;
