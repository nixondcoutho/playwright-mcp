// ESM test file
// This simulates a user using the package in an ESM environment

import { createConnection } from './index.js';

console.log("Starting ESM import test...");
console.log("Import successful! Type:", typeof createConnection);
console.log("Test completed successfully!");