import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirPath = path.join(__dirname, "worker.js");

const CPUcores = os.cpus().length;

const createWorker = (workerData) => {
    return new Promise((resolve, reject) => {
    const worker = new Worker(dirPath, { workerData });
    worker
      .on("message", (data) => {
        resolve({
          status: "resolved",
          data: data,
        });
      })
      .on("error", (data) => {
        resolve({
          status: "error",
          data: null,
        });
      }).on("exit", (code) => {
        if (code !== 0){
            reject(new Error(`Worker stoped with exit code: ${code}`))
        }
      })
  });
};

export const performCalculations = async () => {
  let workers = [];
  for (let i = 1; i < CPUcores; i++) {
    workers.push(createWorker(9 + i));
  }

  const result = await Promise.all(
    workers.map(worker => worker)
  );

  console.log(result);
};
await performCalculations();
