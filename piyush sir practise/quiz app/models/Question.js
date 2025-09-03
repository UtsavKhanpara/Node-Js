import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [String],
  correctAnswer: { type: Number, required: true },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
