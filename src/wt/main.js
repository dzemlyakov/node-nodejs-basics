import { Worker } from "worker_threads";
import os from "os";

const CPUcores = os.cpus().length;

const createWorker = (workerData) => {
  const promise = new Promise((resolve) => {
    const worker = new Worker("./src/wt/worker.js", {
      workerData,
    });
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
          data: data,
        });
      });
  });
  return promise.then(data => data)
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
