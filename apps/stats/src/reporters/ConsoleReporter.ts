import { iOutputTarget } from "../Summary";

export default class ConsoleReporter implements iOutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
