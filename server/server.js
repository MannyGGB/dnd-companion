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
const Journal = require("./models/journal");
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

app.post("/character", async (request, response) => {
  try {
    const newCharacter = await Character.create(request.body);
    response.json(newCharacter);
  } catch (error) {
    console.log(error);
    response.status(500).json("500 Internal Server Error");
  }
});

app.get("/form/races", async (request, response) => {
  try {
    const API = `https://api.open5e.com/v1/races/?format=json`;
    const res = await axios.get(API);
    const wrangledData = [];
    for (let i = 0; i < res.data.count; i++) {
      const loopedNames = res.data.results[i].name;
      wrangledData.push(loopedNames);
    }
    response.json(wrangledData);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Races Not Found");
  }
});

app.get("/form/classes", async (request, response) => {
  try {
    const API = `https://api.open5e.com/v1/classes/?format=json`;
    const res = await axios.get(API);
    const wrangledData = [];
    for (let i = 0; i < res.data.count; i++) {
      const loopedNames = res.data.results[i].name;
      wrangledData.push(loopedNames);
    }
    response.json(wrangledData);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Classes Not Found");
  }
});

app.get("/form/spells", async (request, response) => {
  try {
    const API = `https://api.open5e.com/v1/spells/?format=json`;
    const res = await axios.get(API);
    const wrangledData = [];
    for (let i = 0; i < 20; i++) {
      const loopedNames = res.data.results[i].name;
      wrangledData.push(loopedNames);
    }
    response.json(wrangledData);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Spells Not Found");
  }
});

app.get("/journal", async (request, response) => {
  try {
    const journalEntry = await Journal.find(request.query);
    response.json(journalEntry);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Journal Not Found");
  }
});

app.post("/journal", async (request, response) => {
  try {
    const newJournalEntry = await Journal.create(request.body);
    response.json(newJournalEntry);
  } catch (error) {
    console.log(error);
    response.status(500).json("500 Internal Server Error");
  }
});

app.put("/journal/:id", async (request, response) => {
  try {
    const updatedJournalEntry = await Journal.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.json(updatedJournalEntry);
  } catch (error) {
    console.log(error);
    response.status(500).json("500 Internal Server Error");
  }
});

app.delete("/journal/:id", async (request, response) => {
  try {
    const deletedJournalEntry = await Journal.findByIdAndDelete(
      request.params.id
    );
    response.json(deletedJournalEntry);
  } catch (error) {
    console.log(error);
    response.status(500).json("500 Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
