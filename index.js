const AsyncAwaitAccountService = require('./AsyncAwaitAccountService')
const PromiseAccountService = require('./PromiseAccountService')

aaAccountService = new AsyncAwaitAccountService()
pAccountService = new PromiseAccountService()

aaAccountService.getNameAndBalance().then(account => console.log(account))
pAccountService.getNameAndBalance().then(account => console.log(account))
