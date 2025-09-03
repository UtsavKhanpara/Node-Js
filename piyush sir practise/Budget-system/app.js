const express = require("express");
const db = require("./config/db");
const app = express();
const PORT = 9000; 
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
// Routes
app.use("/",require("./routes/budgetRoutes"));
app.use("/",require("./routes/expenseRoutes"));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
