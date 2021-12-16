import {blockEventLoop, log} from "./helpers/index.mjs";

let intervals = 1

// Every 1 ms should log this message
const timeout = setInterval(() => {
  log(`Interval every millisecond: ${intervals++}`)
}, 1)

// After 1 second the interval will be cleaned
setTimeout(() => {
  clearInterval(timeout)
  log('🧹 cleaning interval after at least 1 second')
}, 1000)

// After 100 milliseconds the event loop will be blocked
setTimeout(() => {
  blockEventLoop()
}, 100)

