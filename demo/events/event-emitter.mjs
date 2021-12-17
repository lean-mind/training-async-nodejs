import {EventEmitter} from 'events'
import fs from "fs";
import path from "path";
import {log} from "../_helpers/index.mjs";

class FileEmitter extends EventEmitter {}

function readFile() {
  const fileEmitter = new FileEmitter()
  fs.readFile(path.resolve('./demo/data.txt'), (err, data) => {
    if (err) {
      fileEmitter.emit('error', err)
    } else {
      fileEmitter.emit('result', data)
    }
  })
  return fileEmitter
}

const readFileConsumer = readFile()
readFileConsumer
  .on('result', (data) => {
    log(data.slice(0,20))
  })
  .on('error', (err) => {
    log(`💥💥 ${err.toString()}`)
  })
