import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-0d249d68.js';
import { o as objectWithoutPropertiesLoose, u as useThemeProps_1 } from '../../common/useThemeProps-ef3d7e2e.js';
import { h as _extends_1, r as require$$4, j as jsxRuntime } from '../../common/colorManipulator-7af06b2d.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { p as propTypes } from '../../common/index-47a09a79.js';
import { b as base } from '../../common/index-49c727b6.js';
import { s as styled_1 } from '../../common/styled-8576ff9b.js';
import { c as capitalize } from '../../common/capitalize-8bdc313b.js';
import '../../common/green-45c74814.js';
import '../../common/extends-7477639a.js';
import '../../common/ownerWindow-46387254.js';
import '../../common/debounce-735db077.js';
import '../../common/useControlled-3de1265b.js';
import '../../common/useForkRef-fb626a2f.js';
import '../../common/useId-820ad9b8.js';
import '../../common/useIsFocusVisible-1ec77cac.js';
import '../../common/getScrollbarSize-0f780b6c.js';
import '../../common/useThemeProps-df9debff.js';
import '../../common/createBox-462ce840.js';
import '../../common/extendSxProp-e84efcc5.js';
import '../../common/emotion-react.browser.esm-6b337b85.js';
import '../../common/ModalUnstyled-a1548d77.js';
import '../../common/generateUtilityClasses-eeff7b3a.js';
import '../../common/ClassNameGenerator-0fb33fc3.js';
import '../../common/index-3eae4d6e.js';

var containerClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getContainerUtilityClass = getContainerUtilityClass;



function getContainerUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiContainer', slot);
}

const containerClasses = (0, base.generateUtilityClasses)('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);
var _default = containerClasses;
exports.default = _default;
});

var Container_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(require$$4);



var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _styled = interopRequireDefault(styled_1);



var _capitalize = interopRequireDefault(capitalize);



const _excluded = ["className", "component", "disableGutters", "fixed", "maxWidth"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${(0, _capitalize.default)(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return (0, base.unstable_composeClasses)(slots, containerClasses_1.getContainerUtilityClass, classes);
};

const ContainerRoot = (0, _styled.default)('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${(0, _capitalize.default)(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  display: 'block'
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}), ({
  theme,
  ownerState
}) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
  const value = theme.breakpoints.values[breakpoint];

  if (value !== 0) {
    acc[theme.breakpoints.up(breakpoint)] = {
      maxWidth: `${value}${theme.breakpoints.unit}`
    };
  }

  return acc;
}, {}), ({
  theme,
  ownerState
}) => (0, _extends2.default)({}, ownerState.maxWidth === 'xs' && {
  [theme.breakpoints.up('xs')]: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 444)
  }
}, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
  [theme.breakpoints.up(ownerState.maxWidth)]: {
    maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
  }
}));
const Container = /*#__PURE__*/React.forwardRef(function Container(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiContainer'
  });
  const {
    className,
    component = 'div',
    disableGutters = false,
    fixed = false,
    maxWidth = 'lg'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    component,
    disableGutters,
    fixed,
    maxWidth
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(ContainerRoot, (0, _extends2.default)({
    as: component,
    ownerState: ownerState,
    className: (0, _clsx.default)(classes.root, className),
    ref: ref
  }, other));
});
var _default = Container;
exports.default = _default;
});

var Container = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  containerClasses: true
};
Object.defineProperty(exports, "containerClasses", {
  enumerable: true,
  get: function () {
    return _containerClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Container.default;
  }
});

var _Container = interopRequireDefault(Container_1);

var _containerClasses = _interopRequireWildcard(containerClasses_1);

Object.keys(_containerClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _containerClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _containerClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Container);

export default __pika_web_default_export_for_treeshaking__;
