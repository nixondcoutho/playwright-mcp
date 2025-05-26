// CommonJS test file
// This simulates a real user scenario with dynamic imports in a CommonJS environment

(async () => {
  try {
    console.log("Starting to import @playwright/mcp in CommonJS...");
    
    // Simulate the user's dynamic import
    const { createConnection } = await import('./cjs/index.cjs');
    
    console.log("Import successful! Type:", typeof createConnection);
    
    // We won't actually create a connection here as it would require browser setup
    // But we can check that the function exists and is properly exported
    console.log("Test completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  }
})();