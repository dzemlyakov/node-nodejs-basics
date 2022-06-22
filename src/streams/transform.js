import { Transform, pipeline } from "stream";

export const transform = async () => {
  const readFromTerminal = process.stdin;
  const writeToTerminal = process.stdout;

  const transformStream = new Transform({
    transform(data, encoding, cb) {
      const reverseData = data.toString().trim().split("").reverse().join("");
      cb(null, reverseData + "\n");
    },
  });

  pipeline(readFromTerminal, transformStream, writeToTerminal, (err) => {
    console.error(err);
  });
};
transform();
