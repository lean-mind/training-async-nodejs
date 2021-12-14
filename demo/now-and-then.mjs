import * as fs from 'fs'
import * as path from "path";
import {log} from "./helpers/index.mjs";

log('Before reading file.')

fs.readFile(path.resolve('./demo/data.txt'), (err, data) => {
  if (err) {
    throw err
  }
  log(`The file has ${data.length} characters.`)
})

log('After reading file.')
