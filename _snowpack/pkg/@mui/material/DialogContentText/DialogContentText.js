import { _ as _objectWithoutPropertiesLoose, j as jsxRuntime } from '../../../common/colorManipulator-7af06b2d.js';
import { _ as _extends } from '../../../common/extends-7477639a.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { s as styled, r as rootShouldForwardProp, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { g as generateUtilityClass, a as generateUtilityClasses, c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import { T as Typography } from '../../../common/Typography-b40d1b99.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/createTheme-52608124.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';
import '../../../common/extendSxProp-e84efcc5.js';

function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass('MuiDialogContentText', slot);
}
const dialogContentTextClasses = generateUtilityClasses('MuiDialogContentText', ['root']);

const _excluded = ["children"];

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const DialogContentTextRoot = styled(Typography, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiDialogContentText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const DialogContentText = /*#__PURE__*/react.forwardRef(function DialogContentText(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDialogContentText'
  });

  const ownerState = _objectWithoutPropertiesLoose(props, _excluded);

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(DialogContentTextRoot, _extends({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref: ref,
    ownerState: ownerState
  }, props, {
    classes: classes
  }));
});

export default DialogContentText;
