const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    if (asset.type !== "ts" && asset.type !== "tsx") {
      return [asset];
    }
    const source = await asset.getCode();
    const cleaned = source.replaceAll("\u0000", "").replaceAll("../../../src", "react-synced-state");
    const base64 = Buffer.from(cleaned).toString("base64");
    asset.setCode(`${source}\nexport const __sourceCode="${base64}"`);
    return [asset];
  },
});
