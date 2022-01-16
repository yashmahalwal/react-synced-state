// A plugin to add text content of tsx files to import
// Adds a named export as fileTextContents which is base64 encoded file contents

const { promises: fs } = require("fs");
const path = require("path");

/** @type {import("snowpack").SnowpackPluginFactory } */
module.exports = function () {
  return {
    name: "my-commenter-plugin",
    async transform({ contents, fileExt, srcPath }) {
      if (fileExt === ".js") {
        try {
          const sourcePath = path.resolve(srcPath, "..", `${path.parse(srcPath).name}.tsx`);
          const handle = await fs.open(sourcePath, "r");
          const { buffer } = await handle.read();
          const textContents = JSON.stringify(buffer.toString());
          await handle.close();
          if (textContents.length) {
            return `${contents}\nexport const __fileTextContents = ${textContents}`;
          }
        } catch {
          // Do nothing - fail silently
        }
      }
    },
  };
};
