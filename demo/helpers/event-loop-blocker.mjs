import {log} from "./log.mjs";

export function blockEventLoop() {
    log('Starting to block the event loop')
    const start = Date.now()
    for (let i = 1; i <= 10e9; i++) {}
    log(`Event loop blocked for ${Date.now() - start} milliseconds`)
    log('Ending to block the event loop')
}
