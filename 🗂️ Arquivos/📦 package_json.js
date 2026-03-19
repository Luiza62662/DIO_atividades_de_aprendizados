{
  "name": "copilot-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "ts-node-dev src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node-dev": "^2.0.0",
    "jest": "^29.0.0",
    "@types/express": "^4.17.0",
    "@types/jest": "^29.0.0"
  }
}
