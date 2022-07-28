const Transactions = require('./Transactions')

describe("transactions", () => {
  describe("showBalance", () => {
    it('returns a default balance of 0', () => {
      const transaction = new Transactions();
      expect(transaction.showBalance()).toEqual(0.00)
    })
  })

  describe("debit", () => {
    it('returns a new balance when the user deposits money using the debit function', () => {
      const transaction = new Transactions();
      transaction.debit(1000)
      expect(transaction.showBalance()).toEqual(1000.00)
    })
  })

  describe("credit", () => {
    it('returns a new balance when the user withdraws money using the debit function', () => {
      const transaction = new Transactions();
      transaction.debit(2000)
      transaction.credit(1000)
      expect(transaction.showBalance()).toEqual(1000)
    })
  })

  describe("showHistory", () => {
    it('returns an empty array of transaction history', () => {
      const transaction = new Transactions();
      expect(transaction.showHistory()).toEqual([])
    })

    it('returns an array of a credit transaction and a debit transaction', () => {
      const transaction = new Transactions();
      const date = new Date ().toLocaleDateString()
      transaction.debit(2000)
      transaction.credit(1000)
      expect(transaction.showHistory())
        .toEqual([{"date": date, "debit": "2000.00", "balance": "2000.00"}, 
                  {"date": date, "credit": "1000.00", "balance": "1000.00"}])
    })
  })
})
