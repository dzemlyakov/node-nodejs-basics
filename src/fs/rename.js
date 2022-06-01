import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files/");

let wrongFileName = "wrongFilename.txt";
let properFilename = "properFilename.md";

export const rename = async () => {
  const fileExists = await fs.promises.access(dirPath + properFilename)
    .then(() => true)
    .catch(() => false);

  if (!fileExists) {
    try {
      await fs.promises.rename(
        dirPath + wrongFileName,
        dirPath + properFilename
      );
    } catch (err) {
      console.log("FS operation failed");
      throw new Error(err);
    }
  } else {
    throw new Error("FS operation failed: the file already existed");
  }
};
rename();
