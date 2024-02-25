import express from "express";
const router = express.Router();

// Global Route
router.get("/", (req, res) => {
  res.send({
    msg: "ayo man wassp",
  });
});

// Creating Data using Post Method..
router.post("/create", (req, res) => {
const data = {...req.body, createdAt: Date.now()}
 res.send(data);
});

export default router;
