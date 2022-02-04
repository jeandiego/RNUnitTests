const config = {
  verbose: true,
  preset: "jest-expo",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  // testMatch: ['**/__tests__/**/*.spec.tsx', '**/__tests__/**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/**/*.spec.tsx",
    "!src/*.tsx"
  ],
  coverageReporters: [
    "lcov"
  ]
};

module.exports = config;
