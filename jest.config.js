const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import("jest").Config} */
const jestBaseConfig = {
  watchPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/coverage/"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/coverage/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setup-tests.ts"],
  testMatch: ["**/*.{spec,test,snap}.{js,jsx,ts,tsx}"],
  collectCoverageFrom: ["*/**/*.{js,jsx,ts,tsx}", "!coverage/**", "!**/node_modules/**", "!**/.next/**"],

  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(jestBaseConfig);
