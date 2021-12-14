import { log } from "./helpers/index.mjs";

export async function copyToUpperCase(readableStream, writableStream) {
  const data = [];

  return new Promise(async (resolve) => {
    readableStream
      .on("data", (chunk) => {
        data.push(chunk);
        writableStream.write(chunk.toString().toUpperCase())
      })
      .on("end", function() {
        return resolve(data.length);
      })
  });
}
