
const app = require('./app.js');
const server = require('http').createServer(app);

const cluster = require('cluster');
const { cpus } = require('os');
const process = require('process');
const numCPUs = cpus().length;

/**
 * HANDLING UNCAUGHT EXCEPTION ERRORS
 * Process.traceDeprecation = true;
 */
process.on('uncaughtException', (err) => {
  console.log(
    `UNCAUGHT EXCEPTION! Server Shutting down...\n
    ${err.name} \n ${err.message} \n ${err.stack}`
  );
  process.exit(1);
});

const PORT = process.env.PORT || 9000; 


if (cluster.isPrimary) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(
        'worker %d died (%s). restarting...',
        worker.process.pid,
        signal || code
      );
      cluster.fork();
    });
  } else {
  server.listen(PORT, () =>
    console.log(
      `Server running on port::${PORT}, Process ID: ${process.pid},`
    )
  );
}

process.on('SIGINT', () => process.exit(1));
