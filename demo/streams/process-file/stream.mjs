import {measure} from "../../_helpers/index.mjs";
import {createReadStream} from "fs";
import path from "path";
import {FileProcessor} from "./file-processor.mjs";
const [_, __, filePath] = process.argv

await measure('Process file while reading it', async () => {
  const processor = new FileProcessor()
  let lastChunk = ''
  for await (const chunk of createReadStream(path.resolve(filePath))) {
    const text = chunk.toString()
    lastChunk = text[text.length - 1] === ' '
      ? (() => {processor.process(lastChunk + text); return ''})()
      : lastChunk + text
  }
  processor.process(lastChunk)
  console.log(processor.report)
})

