const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const axios = require("axios");

const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const Character = require("./models/character");
mongoose.connect(process.env.DATABASE_URL);

// add your endpoints here
app.get("/", (_, response) => response.json("Root route for dnd."));

app.get("/character", async (request, response) => {
  try {
    const characterSheet = await Character.find(request.query);
    response.json(characterSheet);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Character Not Found");
  }
});

app.get("/form", async (request, response) => {
  const API = `https://api.open5e.com/v1/races/?format=json`;
  const res = await axios.get(API);

  const wrangledData = [];
  for (let i = 0; i < res.data.count; i++) {
    const loopedNames = res.data.results[i].name;
    wrangledData.push(loopedNames);
  }

  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
