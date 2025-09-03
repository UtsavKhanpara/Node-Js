const Question = require("../models/Question");

// Show Quiz Page
exports.getQuiz = async (req, res) => {
  try {
    const questions = await Question.find();

    if (!questions.length) {
      return res.render("quiz", { questions: [] });
    }

    res.render("quiz", { questions });
  } catch (err) {
    console.error(err);
    res.send("Error loading quiz");
  }
};

// Handle Result
exports.postResult = (req, res) => {
  try {
    const { answers } = req.body; // frontend से आएगा
    res.render("result", { answers });
  } catch (err) {
    console.error(err);
    res.send("Error submitting result");
  }
};
