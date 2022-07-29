class Transactions {
  constructor() {
    this.balance = 0;
    this.history = [];
    this.date = new Date().toLocaleDateString();
  }

  credit(amount) {
    this.balance -= amount;
    const credit = this.history.push({
      date: this.date,
      debit: null,
      credit: amount.toFixed(2),
      balance: this.balance.toFixed(2),
    });
    return credit;
  }

  debit(amount) {
    this.balance += amount;
    const debit = this.history.push({
      date: this.date,
      debit: amount.toFixed(2),
      credit: null,
      balance: this.balance.toFixed(2),
    });
    return debit;
  }

  showHistory() {
    return this.history;
  }

  showBalance() {
    return this.balance;
  }

  // showStatement() {
  //   const result = this.history
  //   .reverse().map(a => `${ Object.values(a).join(" || ") }`)
  //   .join("\n")
  //   return 'date || credit || debit || balance\n' + result
  // }
}

module.exports = Transactions;

// const transaction = new Transactions()
// transaction.debit(1000)
// transaction.debit(2000)
// transaction.credit(500)

// console.log(transaction.showStatement())
