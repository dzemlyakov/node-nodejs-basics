import fs from "fs";
import crypto from "crypto";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "/files/");

let fileName = "fileToCalculateHashFor.txt";

export const calculateHash = async () => {
  try {
    const fileToHash = await fs.promises.readFile(dirPath + fileName, {
      encoding: "utf8",
    });
    const hashSum = await crypto.createHash("sha256");
    await hashSum.update(fileToHash);
    const hex = await hashSum.digest("hex");

    console.log(hex);
  } catch (err) {
    console.error(err.message);
  }
};
calculateHash();
