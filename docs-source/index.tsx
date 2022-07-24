import React from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import App from "./App";

hljs.registerLanguage("javascript", javascript);
const main = document.createElement("main");
document.body.prepend(main);

ReactDOM.render(<App />, main);
