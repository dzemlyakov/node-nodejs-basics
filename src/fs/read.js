import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files/");

let fileName = "fileToRead.txt";

export const read = async () => {
  try {
    await fs.promises.readFile(dirPath + fileName, {
        encoding: "utf8",
      })
      .then((data) => console.log(data));
  } catch (err) {
    console.log("FS operation failed");
    throw new Error(err);
  }
};
read();
