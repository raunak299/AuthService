const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = (req, res) => {
  app.listen(PORT, () => {
    console.log("server started at 3001");
  });
};

prepareAndStartServer();
