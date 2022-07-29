const Transactions = require("./Transactions");

class Statement {
  constructor(transaction) {
    this.transaction = transaction;
    this.history = [];
  }

  credit(amount) {
    const creditAmount = new Transactions();
    this.history.push(creditAmount.credit(amount));
    return creditAmount;
  }
  debit(amount) {
    const debitAmount = new Transactions();
    this.history.push(debitAmount.debit(amount));
    return debitAmount;
  }

  showStatement() {
    const result = this.history
      .reverse()
      .map((a) => `${Object.values(a).join(" || ")}`)
      .join("\n");
    return "date || credit || debit || balance\n" + result;
  }
}

// const transaction = new Transactions();
// transaction.debit(1000);
// transaction.debit(2000);
// transaction.credit(500);
// console.log(transaction.showHistory())
// const statement = new Statement(transaction);
// console.log(statement.showStatement());

module.exports = Statement;
