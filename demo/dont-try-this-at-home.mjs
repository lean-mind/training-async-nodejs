import * as fs from "fs";
import * as path from "path";
import { Transform } from 'stream'
import {log} from "./helpers/index.mjs";



async function copyToUpperCase  () {
  const inputPath = path.resolve('./demo/data.txt')
  const outputPath = path.resolve('./demo/data-upper-case.txt')
  const readableStream = fs.createReadStream(inputPath)
  const writableStream = fs.createWriteStream(outputPath)
  const toUpperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase())
    }
  })
  const data = []

  return new Promise(async (resolve) => {
    readableStream
      .pipe(toUpperCaseStream)
      .pipe(writableStream)
      .on('data', (line) => {
        log('DATA')
        data.push(line)
      })
      .on('end', async function () {
        log('END')
        await fs.unlink(inputPath, (err) => {
          if (err) throw ('Error deleting csv locally')
          console.log('Deleted local csv')
        })
        return resolve(data[0])
      })
  })
}

log(await copyToUpperCase())
