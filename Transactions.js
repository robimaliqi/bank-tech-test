class Transactions {
  constructor () {
    this.balance = 0;
    this.history = [];
  }

  credit(amount) {
    this.balance -= amount
  }

  debit(amount) {
    this.balance += amount
  }

  showHistory() {
    return this.history;
  }

  showBalance() {
    return this.balance;
  }
}

module.exports = Transactions;