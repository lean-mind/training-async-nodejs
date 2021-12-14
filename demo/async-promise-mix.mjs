import {log} from "./helpers/index.mjs";
import {setTimeout} from 'timers/promises'

async function doAnotherThingAsync() {
  await setTimeout(3000)
  log('Doing another thing')
}

function doSomethingAsync() {
  return new Promise(async resolve => {
    log('I\'m inside a promise callback.')
    await doAnotherThingAsync()
    log('I\'m starting to do something.')
    await setTimeout(2000)
    return resolve()
  })
}

await doSomethingAsync()
log('DONE!')
