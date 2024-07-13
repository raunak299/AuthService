const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const apiRoutes = require("./routes");

const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = (req, res) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log("server started at 3001");
  });
};

prepareAndStartServer();
