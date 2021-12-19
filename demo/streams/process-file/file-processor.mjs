import {EOL} from "os";

export class FileProcessor {
  #report = []

  get report() {
    return [...this.#report]
      .sort(FileProcessor.sortByRepetitionsDesc)
      .reduce(
        (report, {word, repetitions}) =>
          `${report}${word}: ${FileProcessor.addDecimalSeparator(repetitions)}${EOL}`,
        ''
      )
  }

  process(text) {
    const words = text.match(/[A-ú]*/g).filter(Boolean)
    for (const word of words) {
      const index = this.#report.findIndex(({word: reportWord}) => word === reportWord)
      if(index > -1) {
        this.#report[index].repetitions += 1
      } else {
        this.#report.push({word, repetitions: 1})
      }
    }
  }

  static sortByRepetitionsDesc(a, b) {
    return b.repetitions - a.repetitions;
  }

  static addDecimalSeparator(x) {
    return [...String(x)]
      .reverse()
      .map((x, i) => i > 0 && i % 3 === 0 ? `${x}.` : x)
      .reverse()
      .join('')
  }
}
