const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const mainRoute = require("./routes/index.js");

dotenv.config();

const connect = async () => {
  //mongoose promise çalıştığı için asenkron
  try {
    //hataları yakalamak için
    await mongoose.connect(process.env.MONGO_URI); //işlem bitmeden alt satıra geçilmesin
    console.log("connected to mongodb");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw error;
  }
};
//middlewares
app.use(express.json());
app.use(cors());
app.use("/api", mainRoute)

app.listen(5000, () => {
  connect();
  console.log(`Sunucu ${5000} portunda çalışıyor.`);
});
