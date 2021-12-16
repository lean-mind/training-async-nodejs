import {Benchmark} from "./helpers/index.mjs";

const suite = new Benchmark('Simple function')

/*
 * In a test suite we reduced the execution time by 40% just removing unnecessary async in functions
 */
await suite.add('Async', async () => {
  const x = Math.random()
  return x ** x
})

await suite.add('Sync', () => {
  const x = Math.random()
  return x ** x
})

suite.printResults()
