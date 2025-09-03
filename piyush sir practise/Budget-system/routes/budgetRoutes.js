const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetController");

router.get("/", budgetController.getHome);
router.post("/add-budget", budgetController.addBudget);
router.post("/reset", budgetController.resetAll);

module.exports = router;
