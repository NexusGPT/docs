#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

console.log("🚀 Starting Mintlify documentation server...");

// Change to docs directory
process.chdir(path.join(__dirname, ".."));
console.log("Changed working directory to:", process.cwd());

console.log("Spawning Mintlify dev server...");
const mintProcess = spawn(
  "npx",
  ["mintlify", "dev", "--port", "3002", "--watch"],
  { stdio: "inherit" }
);

mintProcess.on("exit", (code, signal) => {
  console.log(
    `Mintlify dev process exited with code ${code} (signal: ${signal})`
  );
});

mintProcess.on("error", (err) => {
  console.error("Failed to start Mintlify dev process:", err);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT, shutting down Mintlify dev process...");
  mintProcess.kill();
  process.exit();
});

console.log("📚 Documentation will be available at:");
console.log("   - Direct: http://localhost:3002");
console.log("   - Via frontend: http://localhost:3000/docs");
