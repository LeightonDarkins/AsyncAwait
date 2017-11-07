const BaseAccountService = require('./BaseAccountService')

class AsyncAwaitAccountService extends BaseAccountService {
  async getNameAndBalance () {
    console.log(`${this.constructor.name}: Getting Name and Balance`)

    let name = await this.getName()
    let balance = await this.getBalance()

    return { name, balance }
  }
}

module.exports = AsyncAwaitAccountService
