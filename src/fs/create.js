import fs from "fs";

export const create = async () => {
  await fs.promises.writeFile("./files/fresh.txt", "I am fresh and young", {
    flag: "wx",
  })
  .catch(err => console.log('FS operation failed', err.code))
};

create();
