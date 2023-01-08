import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import fsp from "fs/promises";
import colors from "colors";

import * as readline from "readline";

const __dirname = "/Портфолио/NodeJs";

fsp
  .readdir(path.join(__dirname))
  .then(async (inDir) => {
    const list = [];
    for (const item of inDir) {
      const src = await fsp.stat(item);
      if (src.isFile()) list.push(item);
    }
    return list;
  })
  .then((list) => {
    return inquirer.prompt({
      name: "fileName",
      type: "list",
      message: "Choose file",
      choices: list,
    });
  })
  .then(({ fileName }) => {
    const find = process.argv[2];
    const file = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false,
    });
    let count = 0;
    let lines = [];
    let lineCount = 0;

    file.on("line", (line) => {
      lineCount++;
      if (line.indexOf(find) !== -1) {
        count++;
        lines.push(lineCount);
      }
    });
    file.on("pause", () => {
      console.log(`Total occurrences ${colors.blue(count)} registered`);
      console.log(`On the lines ${colors.green(lines.join(" "))}`);
    });
    file.on("close", () => console.log(`${colors.red("End of calculations")}`));
  });
