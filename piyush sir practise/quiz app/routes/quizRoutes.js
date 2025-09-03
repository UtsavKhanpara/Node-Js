import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get random question
router.get("/random", async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const random = Math.floor(Math.random() * count);
    const question = await Question.findOne().skip(random);
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/result", (req, res) => {
  const { score, total } = req.query;
  res.render("result", { score, total });
});


export default router;
