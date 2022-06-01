import fs from "fs";

export const copy = async () => {
  try {
    await fs.promises.copyFile(
      ".files",
      "./files_copy"
    );
  } catch (err) {
    console.log("FS operation failed", err);
  }
};
copy();
