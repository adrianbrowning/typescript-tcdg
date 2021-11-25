import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchTuple } from "./MatchTuple";
import CsvFileReader from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export default class MatchReader {
  matches: MatchTuple[] = [];

  constructor(public reader: DataReader) {}

  static fromCSV(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchTuple => {
      // prettier-ignore
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}
