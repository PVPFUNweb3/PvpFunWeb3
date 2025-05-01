const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Point to the Next.js app's root directory to load next.config.js and .env files
  dir: './',
});

// Any custom Jest configurations
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (keep consistent with tsconfig.json paths)
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/_*.{js,jsx,ts,tsx}',
    '!app/**/\\[*\\].{js,jsx,ts,tsx}',
  ],
};

// createJestConfig will return a Next.js configured Jest config
module.exports = createJestConfig(customJestConfig); 