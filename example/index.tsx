import React from 'react';
import ReactDOM from "react-dom";
import "../build/index"
const main = document.createElement("main");
document.body.prepend(main);

ReactDOM.render(<h1>Hello, World!</h1>, main);