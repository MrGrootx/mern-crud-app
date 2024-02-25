import express from "express";
import {
  createRequest,
  getAllRequestData,
  updateDataByid,
} from "../models/userRequest.Schema.mjs";
const router = express.Router();

// Global Route
router.get("/", (req, res) => {
  res.send({
    msg: "ayo man wassp",
  });
});

// Creating Data using Post Method..
router.post("/create", async (req, res) => {
  const data = { ...req.body };
  try {
    // res.send(data);
    await createRequest(data);
    return res.sendStatus(200);
  } catch (error) {
    if (error.name == "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }
    res.sendStatus(400).json(error.message);
  }
});

// Get All Requests
router.get("/requests", async (req, res) => {
  try {
    const datas = await getAllRequestData();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

// update request By ID

router.put("/requests/:id", async (req, res) => {
  const { id } = req.params;

  if (id) {
    const updatedata = await updateDataByid(id, req.body);
    return res.json(updatedata);
  }
  return res.status(403);
});
export default router;
