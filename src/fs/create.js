import fs from "fs";
import promises from "fs/promises";

export const create = async () => {
  if (!fs.existsSync("./files/fresh.txt")) {
    await promises.writeFile("./files/fresh.txt", "I am fresh and young");
  } else {
    throw new Error("FS operation failed");
  }
};

create();
