import React from "../_snowpack/pkg/react.js";
import {Link as RouterLink} from "../_snowpack/pkg/react-router-dom.js";
import Button from "../_snowpack/pkg/@mui/material/Button.js";
const LinkButton = ({...props}) => {
  return /* @__PURE__ */ React.createElement(Button, {
    role: "link",
    component: RouterLink,
    ...props
  });
};
export default LinkButton;
