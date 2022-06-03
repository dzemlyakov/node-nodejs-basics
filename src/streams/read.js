import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files/");

let fileName = "fileToRead.txt";

export const read = async () => {
  const readStream = fs.createReadStream(dirPath + fileName);
  const writeToTerminal = process.stdout;

  readStream.pipe(writeToTerminal);

  readStream.on("data", () => {});
};
read();
