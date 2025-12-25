const os = require("os");

function getSystemStats() {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  return {
    cpuCores: os.cpus().length,
    loadAvg: os.loadavg()[0].toFixed(2), // 1 dk load
    memory: {
      total: (totalMem / 1024 / 1024 / 1024).toFixed(2),
      used: (usedMem / 1024 / 1024 / 1024).toFixed(2),
      free: (freeMem / 1024 / 1024 / 1024).toFixed(2)
    },
    uptime: os.uptime()
  };
}

module.exports = { getSystemStats };

