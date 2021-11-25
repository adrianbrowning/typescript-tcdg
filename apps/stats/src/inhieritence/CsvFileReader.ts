import fs from "fs";

export default abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
