/**
 * Removes the .next folder. Stop `npm run dev` first, or Windows may lock files
 * (especially .next/trace) and deletion will fail.
 */
const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log("Removed .next");
  } else {
    console.log("No .next folder to remove.");
  }
} catch (err) {
  console.error("Could not remove .next:", err.message);
  console.error("Stop the dev server (Ctrl+C in the terminal running npm run dev), then try again.");
  process.exit(1);
}
