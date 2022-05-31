import fs from "fs";

export const read = async () => {
  try {
    const data = await fs.promises.readFile("./files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(data);
  } catch (err) {
    console.log("FS operation failed", err.code);
  }
};
read();
