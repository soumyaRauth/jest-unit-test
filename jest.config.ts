const nextJest = require('next/jest')

/** @type {import('jest').Config} */ 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment  
  dir: './',
})

// Add any custom config to be passed to Jest  
const config = {

  // Existing config
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Add html reporter config  
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath": "test-report.html",
      "includeFailureMsg": true
    }]
  ],

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async  
module.exports = createJestConfig(config)