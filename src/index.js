import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

console.log("Hello, world");
console.log("Environment Variables:", process.env.name);
