import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jest-environment-node",
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
export default config;
