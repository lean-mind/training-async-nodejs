import {promises as fs} from 'fs'
import * as path from "path";
import {FileProcessor} from "./file-processor.mjs";
import {measure} from "../../_helpers/index.mjs";
const [_, __, filePath] = process.argv

// rtk inspect demo/streams/process-file/file-read.report.json --severity info
await measure('Process file after reading it', async () => {
  const file = await fs.readFile(path.resolve(filePath))
  const processor = new FileProcessor()
  processor.process(file.toString())
  console.log(processor.report)
  process.report.writeReport('demo/streams/process-file/file-read.report.json')
})

