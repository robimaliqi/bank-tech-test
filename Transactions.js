class Transactions {
  constructor () {
    this.balance = 0;
    this.history = [];
  }

  showHistory() {
    return this.history;
  }

  showBalance() {
    return this.balance;
  }
}

module.exports = Transactions;