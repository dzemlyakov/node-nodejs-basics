import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcPath = path.join(__dirname, "/files/");
const destPath = path.join(__dirname, "/files_copy/");

export const copy = async () => {
  const folderExists = await fs.promises.access(destPath)
    .then(() => true)
    .catch(() => false);

  if (!folderExists) {
    try {
        let arr = await fs.promises.readdir(srcPath);
        await fs.promises.mkdir(destPath);
      

      await Promise.all(
        arr.map(async (file) => {
          fs.promises.copyFile(srcPath + file, destPath + file);
        })
      );
    } catch (err) {
        console.log("FS operation failed");
        throw new Error(err);
    }
  } else {
    throw new Error("FS operation failed: this folder already existed");
  }
};
copy();
