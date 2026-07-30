// test.js

import { loadEnv } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up to the root directory from "client/src/components"
const rootDir = path.resolve(__dirname, '../../../'); // Adjust as per your actual path
console.log("Root Directory:", rootDir);
// Optional: Set the mode
const mode = 'development';

// Load environment variables from rootDir
const env = loadEnv(mode, rootDir, '');

// Print specific environment variable
console.log("VITE_FORMBOLD_URL:", env.VITE_FORMBOLD_URL);

// Print all (optional)
//console.log("All loaded ENV variables:", env);
