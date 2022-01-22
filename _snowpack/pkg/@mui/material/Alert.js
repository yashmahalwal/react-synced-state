import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-0d249d68.js';
import { o as objectWithoutPropertiesLoose, u as useThemeProps_1 } from '../../common/useThemeProps-ef3d7e2e.js';
import { h as _extends_1, r as require$$4, j as jsxRuntime } from '../../common/colorManipulator-7af06b2d.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { p as propTypes, e as esm } from '../../common/index-47a09a79.js';
import { b as base } from '../../common/index-49c727b6.js';
import { s as styled_1 } from '../../common/styled-8576ff9b.js';
import { c as capitalize } from '../../common/capitalize-8bdc313b.js';
import { P as Paper } from '../../common/index-7f02b7b3.js';
import { B as ButtonBase } from '../../common/index-5a305209.js';
import { c as createSvgIcon_1 } from '../../common/createSvgIcon-e499489a.js';
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
import '../../common/useTheme-99381af8.js';
import '../../common/index-668ff6ef.js';
import '../../common/TransitionGroupContext-b7682080.js';
import '../../common/Transition-2ff61584.js';
import '../../common/TransitionGroup-c1f5db59.js';

var alertClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAlertUtilityClass = getAlertUtilityClass;



function getAlertUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiAlert', slot);
}

const alertClasses = (0, base.generateUtilityClasses)('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
var _default = alertClasses;
exports.default = _default;
});

var iconButtonClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getIconButtonUtilityClass = getIconButtonUtilityClass;



function getIconButtonUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiIconButton', slot);
}

const iconButtonClasses = (0, base.generateUtilityClasses)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
var _default = iconButtonClasses;
exports.default = _default;
});

var IconButton_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(require$$4);







var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _ButtonBase = interopRequireDefault(ButtonBase);

var _capitalize = interopRequireDefault(capitalize);

var _iconButtonClasses = _interopRequireWildcard(iconButtonClasses_1);



const _excluded = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${(0, _capitalize.default)(color)}`, edge && `edge${(0, _capitalize.default)(edge)}`, `size${(0, _capitalize.default)(size)}`]
  };
  return (0, base.unstable_composeClasses)(slots, _iconButtonClasses.getIconButtonUtilityClass, classes);
};

const IconButtonRoot = (0, _styled.default)(_ButtonBase.default, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${(0, _capitalize.default)(ownerState.color)}`], ownerState.edge && styles[`edge${(0, _capitalize.default)(ownerState.edge)}`], styles[`size${(0, _capitalize.default)(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: (0, esm.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => (0, _extends2.default)({}, ownerState.color === 'inherit' && {
  color: 'inherit'
}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && (0, _extends2.default)({
  color: theme.palette[ownerState.color].main
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: (0, esm.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}), ownerState.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${_iconButtonClasses.default.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/React.forwardRef(function IconButton(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(IconButtonRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children
  }));
});
var _default = IconButton;
exports.default = _default;
});

var IconButton = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  iconButtonClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _IconButton.default;
  }
});
Object.defineProperty(exports, "iconButtonClasses", {
  enumerable: true,
  get: function () {
    return _iconButtonClasses.default;
  }
});

var _IconButton = interopRequireDefault(IconButton_1);

var _iconButtonClasses = _interopRequireWildcard(iconButtonClasses_1);

Object.keys(_iconButtonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _iconButtonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iconButtonClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var SuccessOutlined = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');

exports.default = _default;
});

var ReportProblemOutlined = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');

exports.default = _default;
});

var ErrorOutline = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');

exports.default = _default;
});

var InfoOutlined = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');

exports.default = _default;
});

var Close = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 *
 * Alias to `Clear`.
 */
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;
});

var Alert_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(require$$4);





var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _capitalize = interopRequireDefault(capitalize);

var _Paper = interopRequireDefault(Paper);

var _alertClasses = _interopRequireWildcard(alertClasses_1);

var _IconButton = interopRequireDefault(IconButton);

var _SuccessOutlined = interopRequireDefault(SuccessOutlined);

var _ReportProblemOutlined = interopRequireDefault(ReportProblemOutlined);

var _ErrorOutline = interopRequireDefault(ErrorOutline);

var _InfoOutlined = interopRequireDefault(InfoOutlined);

var _Close = interopRequireDefault(Close);



var _CloseIcon;

const _excluded = ["action", "children", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `${variant}${(0, _capitalize.default)(color || severity)}`, `${variant}`],
    icon: ['icon'],
    message: ['message'],
    action: ['action']
  };
  return (0, base.unstable_composeClasses)(slots, _alertClasses.getAlertUtilityClass, classes);
};

const AlertRoot = (0, _styled.default)(_Paper.default, {
  name: 'MuiAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${(0, _capitalize.default)(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === 'light' ? esm.darken : esm.lighten;
  const getBackgroundColor = theme.palette.mode === 'light' ? esm.lighten : esm.darken;
  const color = ownerState.color || ownerState.severity;
  return (0, _extends2.default)({}, theme.typography.body2, {
    backgroundColor: 'transparent',
    display: 'flex',
    padding: '6px 16px'
  }, color && ownerState.variant === 'standard' && {
    color: getColor(theme.palette[color].light, 0.6),
    backgroundColor: getBackgroundColor(theme.palette[color].light, 0.9),
    [`& .${_alertClasses.default.icon}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
    }
  }, color && ownerState.variant === 'outlined' && {
    color: getColor(theme.palette[color].light, 0.6),
    border: `1px solid ${theme.palette[color].light}`,
    [`& .${_alertClasses.default.icon}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
    }
  }, color && ownerState.variant === 'filled' && {
    color: '#fff',
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main
  });
});
const AlertIcon = (0, _styled.default)('div', {
  name: 'MuiAlert',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})({
  marginRight: 12,
  padding: '7px 0',
  display: 'flex',
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = (0, _styled.default)('div', {
  name: 'MuiAlert',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message
})({
  padding: '8px 0'
});
const AlertAction = (0, _styled.default)('div', {
  name: 'MuiAlert',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '4px 0 0 16px',
  marginLeft: 'auto',
  marginRight: -8
});
const defaultIconMapping = {
  success: /*#__PURE__*/(0, jsxRuntime.jsx)(_SuccessOutlined.default, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/(0, jsxRuntime.jsx)(_ReportProblemOutlined.default, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/(0, jsxRuntime.jsx)(_ErrorOutline.default, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/(0, jsxRuntime.jsx)(_InfoOutlined.default, {
    fontSize: "inherit"
  })
};
const Alert = /*#__PURE__*/React.forwardRef(function Alert(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiAlert'
  });
  const {
    action,
    children,
    className,
    closeText = 'Close',
    color,
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = 'alert',
    severity = 'success',
    variant = 'standard'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    color,
    severity,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, jsxRuntime.jsxs)(AlertRoot, (0, _extends2.default)({
    role: role,
    elevation: 0,
    ownerState: ownerState,
    className: (0, _clsx.default)(classes.root, className),
    ref: ref
  }, other, {
    children: [icon !== false ? /*#__PURE__*/(0, jsxRuntime.jsx)(AlertIcon, {
      ownerState: ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /*#__PURE__*/(0, jsxRuntime.jsx)(AlertMessage, {
      ownerState: ownerState,
      className: classes.message,
      children: children
    }), action != null ? /*#__PURE__*/(0, jsxRuntime.jsx)(AlertAction, {
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /*#__PURE__*/(0, jsxRuntime.jsx)(AlertAction, {
      ownerState: ownerState,
      className: classes.action,
      children: /*#__PURE__*/(0, jsxRuntime.jsx)(_IconButton.default, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        children: _CloseIcon || (_CloseIcon = /*#__PURE__*/(0, jsxRuntime.jsx)(_Close.default, {
          fontSize: "small"
        }))
      })
    }) : null]
  }));
});
var _default = Alert;
exports.default = _default;
});

var Alert = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  alertClasses: true
};
Object.defineProperty(exports, "alertClasses", {
  enumerable: true,
  get: function () {
    return _alertClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Alert.default;
  }
});

var _Alert = interopRequireDefault(Alert_1);

var _alertClasses = _interopRequireWildcard(alertClasses_1);

Object.keys(_alertClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _alertClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alertClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Alert);

export default __pika_web_default_export_for_treeshaking__;
