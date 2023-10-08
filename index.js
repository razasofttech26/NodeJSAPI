const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const appData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello I am live");
});

app.get("/service", (req, res) => {
  res.send(appData);
});

//to run our api need to add listen mehtod
app.listen(port, () => {});
