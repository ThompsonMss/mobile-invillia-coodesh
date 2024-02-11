export function chunkArray<T = unknown>(array: Array<T>, chunkSize = 24) {
  const chunks = []

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  return chunks
}
