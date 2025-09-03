const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema({
  totalBudget: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Budget", budgetSchema);
