import fs from "fs";

export const rename = async () => {
  try {
    await fs.promises.rename(
      "./files/wrongFilename.txt",
      "./files/properFilename.md"
    );
  } catch (err) {
    console.log("FS operation failed", err.code);
  }
};
rename();
