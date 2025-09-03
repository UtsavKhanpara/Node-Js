const express = require("express");
const path = require("path");
const db = require("./config/db");
const Task = require("./model/task");

const app = express();
const port = 9092;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const activeStatus = (req.query.status || "all").toLowerCase();

  const [openTasks, progressTasks, reviewTasks, doneTasks] = await Promise.all([
    Task.find({ status: "open" }).sort({ createdAt: -1 }),
    Task.find({ status: "in-progress" }).sort({ createdAt: -1 }),
    Task.find({ status: "review" }).sort({ createdAt: -1 }),
    Task.find({ status: "done" }).sort({ createdAt: -1 }),
  ]);

  return res.render("view", {
    openTasks,
    progressTasks,
    reviewTasks,
    doneTasks,
    activeStatus,
  });
});

app.get("/add", (req, res) => {
  return res.render("add");
});

app.post("/addtask", Task.uploadimage, async (req, res) => {
  try {
    if (req.file) {
      profilePath = "/uploads/" + req.file.filename;
    }
    await Task.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: Number(req.body.price),
      status: req.body.status,
      profile: profilePath,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error adding task");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`🚀 Server running at http://localhost:${port}`);
});
