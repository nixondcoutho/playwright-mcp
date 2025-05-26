/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// CommonJS wrapper for ESM module
'use strict';

// This file enables CommonJS users to use @playwright/mcp via dynamic imports
// Usage example:
// (async () => {
//   const { createServer } = await import("@playwright/mcp");
//   const server = await createServer({ port: 3000 });
// })();

module.exports = {
  createConnection: async (...args) => {
    const { createConnection } = await import('../index.js');
    return createConnection(...args);
  }
};