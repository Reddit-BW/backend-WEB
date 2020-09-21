const express = require("express");
const server = express();
const helmet = require("helmet");
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");
const authenticate = require("../auth/authenticate-middleware");

server.use(helmet());
server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).json({ welcome: "to our API" });
});
server.use("/api/users", authenticate, usersRouter);
server.use("/api/auth", authRouter);

module.exports = server;
