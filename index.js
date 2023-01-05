import fs from "fs";
import { Transform } from "stream";

import * as readline from "readline";

const file = readline.createInterface({
  input: fs.createReadStream("access_tmp.log.txt"),
  output: process.stdout,
  terminal: false,
});

file.on("line", (line) => {
  if (line == "") return false;
  const id = line.slice(0, line.indexOf("-") - 1);
  const writeStream = fs.createWriteStream("./%ip-адрес%_requests.log", {
    flags: "a",
  });
  if (id == "89.123.1.41" || id == "34.48.240.111") {
    writeStream.write(`${line}\n`);
  }
});
