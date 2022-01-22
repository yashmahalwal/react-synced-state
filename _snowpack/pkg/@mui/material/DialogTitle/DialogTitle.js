import { _ as _extends } from '../../../common/extends-7477639a.js';
import { _ as _objectWithoutPropertiesLoose, j as jsxRuntime, r as require$$4 } from '../../../common/colorManipulator-7af06b2d.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { s as styled, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { g as getDialogTitleUtilityClass } from '../../../common/dialogTitleClasses-84a23da9.js';
import { D as DialogContext } from '../../../common/DialogContext-e472d845.js';
import { T as Typography } from '../../../common/Typography-b40d1b99.js';
import { c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/createTheme-52608124.js';
import '../../../common/extendSxProp-e84efcc5.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';

const _excluded = ["className", "id"];

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = styled(Typography, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react.forwardRef(function DialogTitle(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDialogTitle'
  });

  const {
    className,
    id: idProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId: id = idProp
  } = react.useContext(DialogContext);
  return /*#__PURE__*/jsxRuntime.jsx(DialogTitleRoot, _extends({
    component: "h2",
    className: require$$4(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: id
  }, other));
});

export default DialogTitle;
