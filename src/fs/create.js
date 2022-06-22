import fs from "fs";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "files/");

let fileName = "fresh.txt";
let fileData = "I am fresh and young";

export const create = async () => {
  try {
    await fs.promises.writeFile(dirPath + fileName, fileData, {
      flag: "wx",
    });
  } catch (err) {
    console.log("FS operation failed");
    throw new Error(err);
  }
};
create();
