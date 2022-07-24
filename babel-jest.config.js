// For jest only

module.exports = (api) =>
  api.env() === "test"
    ? {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" }, modules: "commonjs" }],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      }
    : {};
