export async function copyToUpperCaseWithAsyncGenerator(
  readableStream,
  writableStream
) {
  const data = [];
  for await (const chunk of readableStream) {
    data.push(chunk);
    writableStream.write(chunk.toString().toUpperCase())
  }
  return data.length;
}
