// import { parentPort } from 'worker_threads';

export const fib = (n = 10) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// # single worker
// parentPort.on('message', ({ n, id }) => {
//   console.log(`[fibonacci.worker:onmessage]: #${id} n: ${n}`);
//   const result = fib(n);
//   parentPort.postMessage({ result, id });
// });

module.exports = (n: number) => {
  return fib(n);
};
