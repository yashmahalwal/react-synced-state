const { base64Encode } = require("@yashmahalwal/parcel-transformer-add-source/build/base64-encode");

/**
 *
 * @type {import("@yashmahalwal/parcel-transformer-add-source/build/types/config").Config}
 */
module.exports = {
  addSourceCode(source, encodedSource) {
    return `${source}\nexport const __sourceCode="${encodedSource}"`;
  },
  encode(sourceCode) {
    return base64Encode(sourceCode);
  },
};
