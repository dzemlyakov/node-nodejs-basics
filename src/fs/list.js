import fs from "fs";

export const list = async () => {
    await fs.promises.readdir('./files')
        .then(filenames => console.log(filenames))
        .catch(err => console.log('FS operation failed', err.code))
};
list()