const Transactions = require('./Transactions')

describe("transactions", () => {
  it('returns a default balance of 0', () => {
    const transaction = new Transactions();
    expect(transaction.showBalance()).toEqual(0)
  })
})