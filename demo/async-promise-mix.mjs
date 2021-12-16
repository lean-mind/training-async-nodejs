import {Benchmark} from "./helpers/index.mjs";
import {setTimeout} from 'timers/promises'

async function doAnotherThingAsync() {
  await setTimeout(3)
}

async function doSomethingAsync() {
  await doAnotherThingAsync()
  await setTimeout(2)
  return 42
}

function doSomethingAsyncThen() {
  return new Promise(resolve => {
    doAnotherThingAsync()
      .then(() => {
        return setTimeout(2)
      })
      .then(() => {
        return resolve(42)
      })
  })
}

// Please, don't do this
function doSomethingAsyncThenAwait() {
  return new Promise(resolve => {
    doAnotherThingAsync()
      .then(async () => {
        await setTimeout(2)
      })
      .then(async () => {
        return resolve(42)
      })
  })
}

const suite = new Benchmark('Mixing Promises with Async')
await suite.add('using then inside Promise', doSomethingAsyncThen)
await suite.add('using async inside Promise', doSomethingAsync)
await suite.add('using async inside then', doSomethingAsyncThenAwait)
suite.printResults()

console.assert(await doSomethingAsync() === 42, 'doSomethingAsync fails')
console.assert(await doSomethingAsyncThen() === 42, 'doSomethingAsyncThen fails')
console.assert(await doSomethingAsyncThenAwait() === 42, 'doSomethingAsyncThenAwait fails')
