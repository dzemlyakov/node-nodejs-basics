import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "files/");

let fileName = "fileToWrite.txt";

export const write = async () => {
  const writeStream = fs.createWriteStream(dirPath + fileName);
  const readStreamFromTerminal = process.stdin;

  readStreamFromTerminal.pipe(writeStream);

  readStreamFromTerminal.on("data", (data) => {
    if (data.toString().match("exit")) {
        writeStream.end()
        readStreamFromTerminal.unpipe(writeStream);
    }
  });
};
write();
