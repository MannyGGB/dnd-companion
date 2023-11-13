const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

// add your endpoints here
app.get("/", (_, response) => response.json("Root route for dnd."));

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
