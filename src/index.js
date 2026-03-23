import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
