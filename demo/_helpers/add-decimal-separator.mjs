export function addDecimalSeparator(x) {
  return [...String(x)]
    .reverse()
    .map((x, i) => i > 0 && i % 3 === 0 ? `${x}.` : x)
    .reverse()
    .join('')
}
