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
      credit: amount.toFixed(2),
      balance: this.balance.toFixed(2)
    })
  }

  debit(amount) {
    this.balance += amount
    this.history.push({
      date: this.date,
      debit: amount.toFixed(2),
      balance: this.balance.toFixed(2)
    })
  }

  showHistory() {
    return this.history;
  }

  showBalance() {
    return this.balance;
  }

  showStatement() {
    
    const result = this.history.map(a => `${ Object.values(a).join(" || ") }`)
    .join("\n")
    return 'date || credit || debit || balance\n' + result
  }

}

module.exports = Transactions;


const transaction = new Transactions()
transaction.debit(2000)
transaction.credit(1000)

console.log(transaction.showStatement())