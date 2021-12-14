import * as fs from 'fs/promises'
import * as path from "path";
import {log} from "./helpers/index.mjs";

log('Before reading file.')

const data = await fs.readFile(path.resolve('./demo/data.txt'))
log(`The file has ${data.length} characters.`)


log('After reading file.')
