import {Benchmark} from "./helpers/index.mjs";
import { copyToUpperCase } from "./dont-try-this-at-home.mjs";
import { copyToUpperCaseWithAsyncGenerator } from "./try-this-at-home.mjs";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

const suite = new Benchmark('Handling streams')

const inputPath = path.resolve("demo/data.txt");
const outputPath = path.resolve("demo/data-upper-case.txt");
const readableStream = createReadStream(inputPath);
const writableStream = createWriteStream(outputPath);

await suite.add(
  'Async black hole',
  async () =>
    copyToUpperCase(readableStream, writableStream)
)

await suite.add(
  'Async generator',
  async () =>
    copyToUpperCaseWithAsyncGenerator(readableStream, writableStream)
)

suite.printResults()
