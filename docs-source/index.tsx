import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const main = document.createElement("main");
document.body.prepend(main);

ReactDOM.render(<App />, main);
