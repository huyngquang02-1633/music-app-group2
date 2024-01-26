const express = require("express");
const app = express();

const dotenv = require("dotenv");

const cors = require("cors");

const mongoose = require("mongoose");
dotenv.config();

app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (req, res) => {
  return res.json("..........");
});

const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(4000, () => console.log("lisitening to port 4000"));
