import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files");

export const list = async () => {
  try {
    await fs.promises
      .readdir(dirPath)
      .then((filenames) => console.log(filenames));
  } catch (err) {
    console.log("FS operation failed");
    throw new Error(err);
  }
};
list();
