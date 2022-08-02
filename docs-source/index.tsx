import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const main = document.createElement("main");
document.body.prepend(main);
const root = ReactDOM.createRoot(main);
root.render(<App />);
