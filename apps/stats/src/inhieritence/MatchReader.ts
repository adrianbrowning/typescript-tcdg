import CsvFileReader from "./CsvFileReader";
import { MatchTuple } from "../MatchTuple";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

export default class MatchReader extends CsvFileReader<MatchTuple> {
  mapRow(row: string[]): MatchTuple {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6]
    ];
    // prettier-resume
  }
}
