const BaseAccountService = require('./BaseAccountService')

class PromiseAccountService extends BaseAccountService {
  getNameAndBalance () {
    console.log(`${this.constructor.name}: Getting Name and Balance`)

    return new Promise(resolve => {
      this.getName().then(name => {
        this.getBalance().then(balance => {
          resolve({ name, balance })
        })
      })
    })
  }
}

module.exports = PromiseAccountService
