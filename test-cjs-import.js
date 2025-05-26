// Test CommonJS dynamic import
(async () => {
  console.log("Testing dynamic import from CommonJS...");
  try {
    const { createConnection } = await import('./cjs/index.cjs');
    console.log("Import successful:", typeof createConnection === 'function');
  } catch (error) {
    console.error("Import failed:", error);
  }
})();