import fs from "fs";
import { iOutputTarget } from "../Summary";

export default class HTMLReport implements iOutputTarget {
  print(report: string): void {
    const html = `
        <div>
          <h1>Analysis Output</h1>
          <p>${report}</p>
        </div>`;
    fs.writeFileSync("report.html", html, { encoding: "utf-8" });
  }
}
