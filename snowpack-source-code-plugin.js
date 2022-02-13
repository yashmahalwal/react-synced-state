// A plugin to add text content of tsx files to import
// Adds a named export as fileTextContents which is base64 encoded file contents

const { promises: fs } = require("fs");
const path = require("path");

/** @type {import("snowpack").SnowpackPluginFactory } */
module.exports = function () {
  return {
    name: "my-commenter-plugin",
    async transform({ contents, fileExt, srcPath }) {
      if (fileExt === ".js" && srcPath.startsWith(path.resolve("docs-source", "CodeSamples"))) {
        try {
          const parsedPath = path.parse(srcPath);
          if (parsedPath.name === "index") {
            // Index files are typescript tunnels
            return;
          }
          const sourcePath = path.resolve(srcPath, "..", `${parsedPath.name}.tsx`);
          const handle = await fs.open(sourcePath, "r");
          const { buffer } = await handle.read();
          const textContents = Buffer.from(
            buffer.toString().replaceAll("\u0000", "").replaceAll("../../../src", "react-synced-state")
          ).toString("base64");
          await handle.close();
          if (textContents.length) {
            return `${contents}\nexport const __fileTextContents = '${textContents}'`;
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
  };
};
