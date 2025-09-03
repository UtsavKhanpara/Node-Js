const Expense = require("../models/Expense");

module.exports.addExpense = async (req, res) => {
  const { title, amount } = req.body;
  await Expense.create({ title, amount });
  res.redirect("/");
};

module.exports.removeExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
