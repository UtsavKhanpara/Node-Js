const Budget = require("../models/Budget");
const Expense = require("../models/Expense");

module.exports.getHome = async (req, res) => {
  
  const budget = await Budget.findOne();  //khali ek budeget show krva mate 
  const expenses = await Expense.find();   //bdha expense find thase

  let totalBudget = budget ? budget.totalBudget : 0;  //budget hoi to rakhvanu otherwise 0
  let totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0); 
   //bdha expense amount add krine total nikle che
   //reduce() bdha expense amount ne add krshe
   //koi expense nahi hoi to by default 0 value
  let budgetLeft = totalBudget - totalExpenses;  //remaining budget find
  

  return res.render("index", {
    totalBudget,
    totalExpenses,
    budgetLeft,
    expenses
  });
};

module.exports.addBudget = async (req, res) => {
  await Budget.deleteMany(); // last budeget remove thy jase
  await Budget.create({ totalBudget: req.body.budget });  //only store latest budget je form mathi avse
  res.redirect("/");
};

module.exports.resetAll = async (req, res) => {
  await Budget.deleteMany(); //all budeget delete
  await Expense.deleteMany(); //all expense delete
  res.redirect("/");
};
