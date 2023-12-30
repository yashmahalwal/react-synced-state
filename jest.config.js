module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.ts"],
  transform: {
    "(ts|tsx)": ["babel-jest", { configFile: "./babel-jest.config.js" }],
  },
  transformIgnorePatterns: [],
  collectCoverageFrom: ["src/**/*"],
};
