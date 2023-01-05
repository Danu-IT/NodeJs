import fs from "fs";
import { Transform } from "stream";
//1. const data = fs.readFileSync("./access.log", { encoding: "utf-8" }); синхронное чтение
//2. fs.readFile("./access.log", { encoding: "utf-8" }, (err, data) => { асинхронное чтенике
//   console.log(data);
// });

// const data = `213.180.195.231 - - [29/Jan/2007:00:07:17 +0000] "GET /excel/lsn015.html HTTP/1.1" 200 18918 "-" "YaDirectBot/1.0"\n`;
//4. fs.writeFileSync("./access.log", data, { flag: "a" }); синхронная запись
//5. fs.writeFile("./access.log", data, { flag: "a" }, console.error); асинхронная запись

// Стриминг (Событийная модель)

//6. const readStream = fs.createReadStream("./access.log", {
//   encoding: "utf8",
//   start: 0,
//   end: 10,
//   //highWaterMark - размер чанков
// });
// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readStream.on("end", () => console.log("Finished reading"));
// readStream.on("error", (err) => console.error(err.message));

// const data = `213.180.195.231 - - [29/Jan/2007:00:07:17 +0000] "GET /excel/lsn015.html HTTP/1.1" 200 18918 "-" "YaDirectBot/1.0"\n`;

//7. const writeStream = fs.createWriteStream("./access.log", { flags: "a" });

// writeStream.write(data);
// writeStream.end(() => console.log("File writing is finished"));

//8. const readStream = new fs.ReadStream("./access.log");

// const transformStream = new Transform({
//   transform(chunk, encoding, callback) {
//     const editedChunk = chunk
//       .toString()
//       .replace(/((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/g, "*.*.*.*");

//     this.push(editedChunk);

//     callback(editedChunk);
//   },
// });

// const writeStream = fs.createWriteStream("./access-ip-protected.log", {
//   flags: "a",
// });

// readStream.pipe(transformStream).pipe(writeStream);
