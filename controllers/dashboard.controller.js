import Record from "../models/record.js";

export const getSummary = async (req, res) => {
  const records = await Record.find();

  const income = records.filter(r => r.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = records.filter(r => r.type === "expense").reduce((a, b) => a + b.amount, 0);

  res.json({ totalIncome: income, totalExpense: expense, net: income - expense });
};
