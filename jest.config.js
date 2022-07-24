module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.ts"],
  transform: {
    "\\.tsx?$": ["babel-jest", { configFile: "./babel-jest.config.js" }],
  },
  transformIgnorePatterns: [],
};
