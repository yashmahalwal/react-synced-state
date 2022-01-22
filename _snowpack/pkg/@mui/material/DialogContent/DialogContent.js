import { _ as _objectWithoutPropertiesLoose, j as jsxRuntime, r as require$$4 } from '../../../common/colorManipulator-7af06b2d.js';
import { _ as _extends } from '../../../common/extends-7477639a.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { s as styled, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { g as generateUtilityClass, a as generateUtilityClasses, c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import { d as dialogTitleClasses } from '../../../common/dialogTitleClasses-84a23da9.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/createTheme-52608124.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';

function getDialogContentUtilityClass(slot) {
  return generateUtilityClass('MuiDialogContent', slot);
}
const dialogContentClasses = generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);

const _excluded = ["className", "dividers"];

const useUtilityClasses = ownerState => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ['root', dividers && 'dividers']
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};

const DialogContentRoot = styled('div', {
  name: 'MuiDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends({
  flex: '1 1 auto',
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  padding: '20px 24px'
}, ownerState.dividers ? {
  padding: '16px 24px',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`
} : {
  [`.${dialogTitleClasses.root} + &`]: {
    paddingTop: 0
  }
}));
const DialogContent = /*#__PURE__*/react.forwardRef(function DialogContent(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDialogContent'
  });

  const {
    className,
    dividers = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = _extends({}, props, {
    dividers
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(DialogContentRoot, _extends({
    className: require$$4(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});

export default DialogContent;
