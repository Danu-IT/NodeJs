// CLI - консольное приложение
import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as readline from "readline";
//1. const fileName = process.argv[2];
// const __dirname = "/Портфолио/NodeJs";

// fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
//   console.log(data);
// });

//2. const __dirname = "/Портфолио/NodeJs";

// const options = yargs(hideBin(process.argv))
//   .usage("Usage: -p <path>")
//   .option("p", {
//     alias: "path",
//     describe: "Path to file",
//     demandOption: true,
//   }).argv;

// const fileName = options.path;

// fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log(options);

//3. const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter the path to the file: ", (inPath) => {
//   console.log(inPath);
//   rl.close();
// });

// rl.on("close", () => process.exit(0));

//4. const fileName = process.argv[2];
// const __dirname = "/Портфолио/NodeJs";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter the path to the file: ", (fileName) => {
//   fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
//     console.log(data);
//     rl.close();
//   });
// });

// rl.on("close", () => process.exit(0));
