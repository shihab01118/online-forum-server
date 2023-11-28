require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB.js");
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
    await connectDB();
    server.listen(port, () => {
        console.log(`server is running on port: ${port}`);
    })
}

main();
