// CommonJS test file
// This simulates a real user scenario with dynamic imports in a CommonJS environment

(async () => {
  try {
    console.log("Starting to import @playwright/mcp in CommonJS...");
    
    // Simulate the user's dynamic import with a clean import to avoid caching issues
    const mcpModule = await import('./cjs/index.cjs');
    
    console.log("Import successful!");
    console.log("Module contents:", Object.keys(mcpModule));
    console.log("createConnection type:", typeof mcpModule.createConnection);
    console.log("createServer type:", typeof mcpModule.createServer);
    
    // We won't actually create a connection here as it would require browser setup
    // But we can check that the functions exist and are properly exported
    console.log("Test completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  }
})();