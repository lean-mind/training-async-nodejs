import * as fs from 'fs'
import * as path from "path"
import {EOL} from 'os'

function fromBytesToMB(bytes) {
  return (bytes / 1024000).toFixed(2)
}

async function write(amountOfLines,amountOfRepetitions){
  const start = Date.now()
  const filePath = path.resolve('demo/data.txt')
  const file = fs.createWriteStream(filePath);
  const text = `Hodor! Hodor hodor. Hodor hodor! Hodor, hodor. Hodor. Hodor, hodor, hodor hodor. HODOR? Hodor hodor! Hodor hodor HODOR! Hodor.${EOL}`
  for(let i=0; i<= amountOfLines; i++) {
    file.write(text.repeat(amountOfRepetitions));
  }
  file.end(() => {
    fs.stat(filePath, (err, stats) => {
      console.log(`Generated file (${fromBytesToMB(stats.size)} MB) in ${Date.now() - start}ms`)
    })
  })

}

const [_, __, amountOfRepetitions] = process.argv

await write(1_000_000, +amountOfRepetitions)

