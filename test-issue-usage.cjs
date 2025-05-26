// CommonJS test file
// This simulates the exact scenario described in the issue

(async () => {
  try {
    console.log("Starting MCP server via dynamic import...");
    
    // This mimics the user's code from the issue
    const { createServer } = await import('./index.js');
    console.log("createServer imported successfully:", typeof createServer);
    
    // Using createConnection instead
    const { createConnection } = await import('./index.js');
    console.log("createConnection imported successfully:", typeof createConnection);
    
    console.log("Test completed!");
  } catch (error) {
    console.error("Test failed:", error);
    console.error(error.stack);
  }
})();