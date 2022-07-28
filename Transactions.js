class Transactions {
  constructor () {
    this.balance = 0;
    this.history = [];
    this.date = new Date().toLocaleDateString();
  }

  credit(amount) {
    this.balance -= amount
    this.history.push({
      date: this.date,
      credit: amount,
      balance: this.balance
    })
  }

  debit(amount) {
    this.balance += amount
    this.history.push({
      date: this.date,
      debit: amount,
      balance: this.balance
    })
  }

  showHistory() {
    return this.history;
  }

  showBalance() {
    return this.balance;
  }
}

module.exports = Transactions;