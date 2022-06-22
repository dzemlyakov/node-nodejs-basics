import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "files/");

let fileName = "fileToCompress.txt";

export const compress = async () => {
  const readStream = fs.createReadStream(dirPath + fileName);
  const writeStream = fs.createWriteStream(dirPath + fileName + ".gz");
  const gzip = zlib.createGzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("success!");
    }
  });
};
compress();
