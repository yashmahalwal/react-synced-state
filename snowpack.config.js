// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: "docs-source",
  workspaceRoot: "/",
  mount: {
    /* ... */
  },
  plugins: ["./snowpack-source-code-plugin.js", "@snowpack/plugin-react-refresh" /* ... */],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: "docs",
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
};
