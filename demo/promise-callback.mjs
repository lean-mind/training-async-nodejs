import {log} from "./helpers/index.mjs";

function doSomethingAsync() {
  return new Promise(resolve => {
    log('I\'m inside a promise callback.')
    setTimeout(() => {
      log('I\'m going to be resolved.')
      resolve()
    }, 2000)
  })
}

await doSomethingAsync()
log('DONE!')
