class Transactions {
  constructor () {
    this.balance = 0;
    this.history = [];
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