import fsPromises from "fs/promises";

export const list = async () => {
    await fsPromises.readdir('./files')
        .then(filenames => console.log(filenames))
        .catch(err => console.log('FS operation failed', err))
};
list()