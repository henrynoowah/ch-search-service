/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFiles: [
    "./dotenv-config.js"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironment: 'node',
  testMatch: ['**/*.test.(ts|tsx)'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  preset: 'ts-jest',
};