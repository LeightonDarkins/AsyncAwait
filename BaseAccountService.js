module.exports = class BaseAccountService {
  getName () {
    console.log(`${this.constructor.name}: Getting Name From Account DB`)

    return new Promise(resolve => {
      setTimeout(() => {
        resolve('account-1')
      }, 100)
    })
  }

  getBalance () {
    console.log(`${this.constructor.name}: Getting Balance From Transaction DB`)

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(6000)
      }, 100)
    })
  }
}
