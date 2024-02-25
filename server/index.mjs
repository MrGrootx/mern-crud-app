import express from "express";
import rootRouter from "./routes/main.mjs";
import dotenv from "dotenv";
import { mongoose } from "mongoose";

const server = express();
dotenv.config();

server.use(express.json());
server.use(rootRouter);
rootRouter.get("*", (req, res) => {
  return res.status(404).json("oops ⚠ page not found");
});

server.listen(process.env.PORT, () => {
  console.log(`server is running on  http://localhost:${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("🟢 Database connected");
  })
  .catch((err) => {
    console.log(`Db Connection Error`, err);
  });
