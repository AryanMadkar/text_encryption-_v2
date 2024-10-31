require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db/db");
const router = require("./routes/registeration.route");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());

app.use("/user", router);

const server = () => {
  db();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

server();
