// seed/questions.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../models/Question.js";

dotenv.config();

const questions = [
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: 2, // index of "Paris"
  },
  {
    questionText: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: 3, // index of "JavaScript"
  },
  {
    questionText: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correctAnswer: 1, // index of "Cascading Style Sheets"
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected...");

    await Question.deleteMany({});
    console.log("🗑️ Old questions deleted");

    const result = await Question.insertMany(questions);
    console.log("✅ Inserted questions:", result);

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding questions:", err);
    mongoose.connection.close();
  }
}

seedDB();
