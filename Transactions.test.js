const Transactions = require('./Transactions')

describe("transactions", () => {
  describe("showBalance", () => {
    it('returns a default balance of 0', () => {
    const transaction = new Transactions();
    expect(transaction.showBalance()).toEqual(0)
    })
  })

  describe("showHistory", () => {
    it('returns an empty array of transaction history', () =>{
    const transaction = new Transactions();
    expect(transaction.showHistory()).toEqual([])
    })
  })
})
