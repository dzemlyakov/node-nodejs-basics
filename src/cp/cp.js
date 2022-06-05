import { fork } from "child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "files", "script.js");

export const spawnChildProcess = async (args) => {
  args = args.slice(2);
  const child = fork(dirPath, args, { silent: true });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
  child.stdout.on("data", (data) =>
    console.log("From child stdout:", data.toString())
  );
};
await spawnChildProcess(process.argv);
