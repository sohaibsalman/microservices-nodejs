const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  console.log("Event received: " + req.body.type);

  axios
    .post("http://localhost:4000/events", req.body)
    .catch((error) => console.log(error));
  axios
    .post("http://localhost:4001/events", req.body)
    .catch((error) => console.log(error));
  axios
    .post("http://localhost:4002/events", req.body)
    .catch((error) => console.log(error));

  res.send({});
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
