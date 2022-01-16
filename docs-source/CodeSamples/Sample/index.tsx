export { default, __fileTextContents as SampleSourceCode } from "./Sample";

declare module "./Sample" {
  export const __fileTextContents: string;
}
