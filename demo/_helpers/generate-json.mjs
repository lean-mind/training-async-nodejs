import * as fs from 'fs'
import * as path from "path"
import faker from 'faker'
import { addDecimalSeparator } from "./add-decimal-separator.mjs";

function fromBytesToMB(bytes) {
  return (bytes / 1024000).toFixed(2)
}

async function write(amountOfLines ){
  const start = Date.now()
  const filePath = path.resolve('demo/data.json')
  const file = fs.createWriteStream(filePath);
  for(let i=1; i<= amountOfLines; i++) {
    if (i % 10_000 === 0) {
      console.log(`Generated ${addDecimalSeparator(i)} records`)
    }
    file.write(JSON.stringify(faker.helpers.createCard()));
  }
  file.end(() => {
    fs.stat(filePath, (err, stats) => {
      console.log(`Generated JSON file (${fromBytesToMB(stats.size)} MB) in ${Date.now() - start}ms`)
    })
  })

}

const [_, __, amountOfLines] = process.argv

await write(+amountOfLines || 1_000_000)

