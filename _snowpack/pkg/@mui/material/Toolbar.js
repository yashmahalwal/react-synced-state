import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-0d249d68.js';
import { o as objectWithoutPropertiesLoose, u as useThemeProps_1 } from '../../common/useThemeProps-ef3d7e2e.js';
import { h as _extends_1, r as require$$4, j as jsxRuntime } from '../../common/colorManipulator-7af06b2d.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { p as propTypes } from '../../common/index-47a09a79.js';
import { b as base } from '../../common/index-49c727b6.js';
import { s as styled_1 } from '../../common/styled-8576ff9b.js';
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

var toolbarClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getToolbarUtilityClass = getToolbarUtilityClass;



function getToolbarUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiToolbar', slot);
}

const toolbarClasses = (0, base.generateUtilityClasses)('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
var _default = toolbarClasses;
exports.default = _default;
});

var Toolbar_1 = createCommonjsModule(function (module, exports) {



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





const _excluded = ["className", "component", "disableGutters", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ['root', !disableGutters && 'gutters', variant]
  };
  return (0, base.unstable_composeClasses)(slots, toolbarClasses_1.getToolbarUtilityClass, classes);
};

const ToolbarRoot = (0, _styled.default)('div', {
  name: 'MuiToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}, ownerState.variant === 'dense' && {
  minHeight: 48
}), ({
  theme,
  ownerState
}) => ownerState.variant === 'regular' && theme.mixins.toolbar);
const Toolbar = /*#__PURE__*/React.forwardRef(function Toolbar(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiToolbar'
  });
  const {
    className,
    component = 'div',
    disableGutters = false,
    variant = 'regular'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    component,
    disableGutters,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(ToolbarRoot, (0, _extends2.default)({
    as: component,
    className: (0, _clsx.default)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
var _default = Toolbar;
exports.default = _default;
});

var Toolbar = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  toolbarClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Toolbar.default;
  }
});
Object.defineProperty(exports, "toolbarClasses", {
  enumerable: true,
  get: function () {
    return _toolbarClasses.default;
  }
});

var _Toolbar = interopRequireDefault(Toolbar_1);

var _toolbarClasses = _interopRequireWildcard(toolbarClasses_1);

Object.keys(_toolbarClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _toolbarClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toolbarClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Toolbar);

export default __pika_web_default_export_for_treeshaking__;
