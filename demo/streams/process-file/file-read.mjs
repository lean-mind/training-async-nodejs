import {promises as fs} from 'fs'
import * as path from "path";
import {FileProcessor} from "./file-processor.mjs";
import {measure} from "../../_helpers/index.mjs";
const [_, __, filePath] = process.argv

await measure('Process file after reading it', async () => {
  const text = await fs.readFile(path.resolve(filePath))
  const processor = new FileProcessor()
  processor.process(text.toString())
  console.log(processor.report)
})

