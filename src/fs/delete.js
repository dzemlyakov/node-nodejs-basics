import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files/");

let fileName = "fileToRemove.txt";

export const remove = async () => {
  try {
    await fs.promises.rm(dirPath + fileName);
  } catch (err) {
    console.log("FS operation failed");
    throw new Error(err);
  }
};
remove();
