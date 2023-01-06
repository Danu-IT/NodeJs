import inquirer from "inquirer";
import path from "path";
import fsp from "fs/promises";

//1. inquirer
//   .prompt({
//     name: "fileName",
//     type: "list",
//     message: "Choose a file",
//     choices: ["file_a", "file_b", "file_c"],
//   })
//   .then((data) => console.log(data));

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
  .then(({ fileName }) => fsp.readFile(fileName, "utf-8"))
  .then((data) => {
    console.log(data);
  });
