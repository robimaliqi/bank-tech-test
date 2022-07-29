const Transactions = require('./Transactions')

class Statement {
  constructor(transaction) {
    this.transaction = transaction;
  }

  showStatement() {
    const result = this.transaction.showHistory()
    .reverse().map(a => `${ Object.values(a).join(" || ") }`)
    .join("\n")
    return 'date || credit || debit || balance\n' + result
  }
}

const transaction = new Transactions()
transaction.debit(1000)
transaction.debit(2000)
transaction.credit(500)
// console.log(transaction.showHistory())
const statement = new Statement(transaction);
console.log(statement.showStatement())

module.exports = Account;