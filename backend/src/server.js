import express from "express";
import colors from "colors";
import morgan from "morgan";
import config from "./config/index.js";
import routes from "./routes/index.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import path from "path";

const server = express();

server.use(express.json());

if (config.nodeEnv === "development") {
  server.use(morgan("dev"));
}

//DB connection
connectDB();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type, authorization");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD");
  return next();
});
//use routes
server.use(config.api.prefix, routes);

//Upload folder
const __dirname = path.resolve();
server.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Frontend production
if (config.nodeEnv === "production") {
  server.use(express.static(path.join(__dirname, "frontend/build")));
  server.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  // API status
  server.get(config.api.prefix, (req, res) => {
    res.send("API is running...");
  });
}

//middleware
server.use(notFound);
server.use(errorHandler);

export default server;
