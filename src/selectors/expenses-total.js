export default (expenses) => {
  return expenses.map((expense) => expense.amount)
  .reduce((acc, expense) => acc + expense, 0);
}
