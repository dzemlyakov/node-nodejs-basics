import fs from "fs";

export const remove = async () => {
  try {
    await fs.promises.rm("./files/fileToRemove.txt");
  } catch (err) {
    console.log("FS operation failed", err.code);
  }
};
remove();
