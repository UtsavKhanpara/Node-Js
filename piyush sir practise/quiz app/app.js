import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import questionRoutes from "./routes/quizRoutes.js";

const app = express();

// dirname setup (ESM me __dirname directly kaam nahi karta)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/quizapp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use("/api/questions", questionRoutes);

// Views setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// ✅ result route add karo
app.get("/result", (req, res) => {
  const { score, total } = req.query;
  res.render("result", { score, total });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
