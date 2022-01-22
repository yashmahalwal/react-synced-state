import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-0d249d68.js';
import { o as objectWithoutPropertiesLoose, u as useThemeProps_1, c as createTransitions_1 } from '../../common/useThemeProps-ef3d7e2e.js';
import { h as _extends_1, r as require$$4, j as jsxRuntime } from '../../common/colorManipulator-7af06b2d.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { a as esm, p as propTypes } from '../../common/index-47a09a79.js';
import { a as useEventCallback, u as useForkRef, b as useIsFocusVisible, e as esm$1 } from '../../common/index-668ff6ef.js';
import { b as base } from '../../common/index-49c727b6.js';
import { s as styled_1 } from '../../common/styled-8576ff9b.js';
import { u as useTheme_1 } from '../../common/useTheme-99381af8.js';
import { c as capitalize } from '../../common/capitalize-8bdc313b.js';
import { c as createSvgIcon_1 } from '../../common/createSvgIcon-e499489a.js';
import { u as useEnhancedEffect } from '../../common/useEnhancedEffect-6417b75f.js';
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
import '../../common/TransitionGroupContext-b7682080.js';
import '../../common/Transition-2ff61584.js';
import '../../common/index-3eae4d6e.js';
import '../../common/TransitionGroup-c1f5db59.js';
import '../../common/ModalUnstyled-a1548d77.js';
import '../../common/generateUtilityClasses-eeff7b3a.js';
import '../../common/ClassNameGenerator-0fb33fc3.js';

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransitionProps = getTransitionProps;
exports.reflow = void 0;

const reflow = node => node.scrollTop;

exports.reflow = reflow;

function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;

  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}
});

var createChainedFunction = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_createChainedFunction;
exports.default = _default;
});

var debounce = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_debounce;
exports.default = _default;
});

var deprecatedPropType = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_deprecatedPropType;
exports.default = _default;
});

var isMuiElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_isMuiElement;
exports.default = _default;
});

var ownerDocument = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_ownerDocument;
exports.default = _default;
});

var ownerWindow = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_ownerWindow;
exports.default = _default;
});

var requirePropFactory = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_requirePropFactory;
exports.default = _default;
});

var setRef = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_setRef;
exports.default = _default;
});

var useId = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_useId;
exports.default = _default;
});

var unsupportedProp = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_unsupportedProp;
exports.default = _default;
});

var useControlled = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_useControlled;
exports.default = _default;
});

var utils$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function () {
    return _capitalize.default;
  }
});
Object.defineProperty(exports, "createChainedFunction", {
  enumerable: true,
  get: function () {
    return _createChainedFunction.default;
  }
});
Object.defineProperty(exports, "createSvgIcon", {
  enumerable: true,
  get: function () {
    return _createSvgIcon.default;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return _debounce.default;
  }
});
Object.defineProperty(exports, "deprecatedPropType", {
  enumerable: true,
  get: function () {
    return _deprecatedPropType.default;
  }
});
Object.defineProperty(exports, "isMuiElement", {
  enumerable: true,
  get: function () {
    return _isMuiElement.default;
  }
});
Object.defineProperty(exports, "ownerDocument", {
  enumerable: true,
  get: function () {
    return _ownerDocument.default;
  }
});
Object.defineProperty(exports, "ownerWindow", {
  enumerable: true,
  get: function () {
    return _ownerWindow.default;
  }
});
Object.defineProperty(exports, "requirePropFactory", {
  enumerable: true,
  get: function () {
    return _requirePropFactory.default;
  }
});
Object.defineProperty(exports, "setRef", {
  enumerable: true,
  get: function () {
    return _setRef.default;
  }
});
Object.defineProperty(exports, "unstable_ClassNameGenerator", {
  enumerable: true,
  get: function () {
    return base.unstable_ClassNameGenerator;
  }
});
Object.defineProperty(exports, "unstable_useEnhancedEffect", {
  enumerable: true,
  get: function () {
    return _useEnhancedEffect.default;
  }
});
Object.defineProperty(exports, "unstable_useId", {
  enumerable: true,
  get: function () {
    return _useId.default;
  }
});
Object.defineProperty(exports, "unsupportedProp", {
  enumerable: true,
  get: function () {
    return _unsupportedProp.default;
  }
});
Object.defineProperty(exports, "useControlled", {
  enumerable: true,
  get: function () {
    return _useControlled.default;
  }
});
Object.defineProperty(exports, "useEventCallback", {
  enumerable: true,
  get: function () {
    return _useEventCallback.default;
  }
});
Object.defineProperty(exports, "useForkRef", {
  enumerable: true,
  get: function () {
    return _useForkRef.default;
  }
});
Object.defineProperty(exports, "useIsFocusVisible", {
  enumerable: true,
  get: function () {
    return _useIsFocusVisible.default;
  }
});

var _capitalize = interopRequireDefault(capitalize);

var _createChainedFunction = interopRequireDefault(createChainedFunction);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);

var _debounce = interopRequireDefault(debounce);

var _deprecatedPropType = interopRequireDefault(deprecatedPropType);

var _isMuiElement = interopRequireDefault(isMuiElement);

var _ownerDocument = interopRequireDefault(ownerDocument);

var _ownerWindow = interopRequireDefault(ownerWindow);

var _requirePropFactory = interopRequireDefault(requirePropFactory);

var _setRef = interopRequireDefault(setRef);

var _useEnhancedEffect = interopRequireDefault(useEnhancedEffect);

var _useId = interopRequireDefault(useId);

var _unsupportedProp = interopRequireDefault(unsupportedProp);

var _useControlled = interopRequireDefault(useControlled);

var _useEventCallback = interopRequireDefault(useEventCallback);

var _useForkRef = interopRequireDefault(useForkRef);

var _useIsFocusVisible = interopRequireDefault(useIsFocusVisible);
});

var collapseClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCollapseUtilityClass = getCollapseUtilityClass;



function getCollapseUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiCollapse', slot);
}

const collapseClasses = (0, base.generateUtilityClasses)('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
var _default = collapseClasses;
exports.default = _default;
});

var Collapse_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

var React = _interopRequireWildcard(react);

var _clsx = interopRequireDefault(require$$4);

var _propTypes = interopRequireDefault(propTypes);







var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);





var _useTheme = interopRequireDefault(useTheme_1);







const _excluded = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `${orientation}`],
    entered: ['entered'],
    hidden: ['hidden'],
    wrapper: ['wrapper', `${orientation}`],
    wrapperInner: ['wrapperInner', `${orientation}`]
  };
  return (0, base.unstable_composeClasses)(slots, collapseClasses_1.getCollapseUtilityClass, classes);
};

const CollapseRoot = (0, _styled.default)('div', {
  name: 'MuiCollapse',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.state === 'entered' && styles.entered, ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  height: 0,
  overflow: 'hidden',
  transition: theme.transitions.create('height')
}, ownerState.orientation === 'horizontal' && {
  height: 'auto',
  width: 0,
  transition: theme.transitions.create('width')
}, ownerState.state === 'entered' && (0, _extends2.default)({
  height: 'auto',
  overflow: 'visible'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto'
}), ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && {
  visibility: 'hidden'
}));
const CollapseWrapper = (0, _styled.default)('div', {
  name: 'MuiCollapse',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})(({
  ownerState
}) => (0, _extends2.default)({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: 'flex',
  width: '100%'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto',
  height: '100%'
}));
const CollapseWrapperInner = (0, _styled.default)('div', {
  name: 'MuiCollapse',
  slot: 'WrapperInner',
  overridesResolver: (props, styles) => styles.wrapperInner
})(({
  ownerState
}) => (0, _extends2.default)({
  width: '100%'
}, ownerState.orientation === 'horizontal' && {
  width: 'auto',
  height: '100%'
}));
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Collapse = /*#__PURE__*/React.forwardRef(function Collapse(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiCollapse'
  });
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    style,
    timeout = createTransitions_1.duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = esm$1.Transition
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    orientation,
    collapsedSize: collapsedSizeProp
  });
  const classes = useUtilityClasses(ownerState);
  const theme = (0, _useTheme.default)();
  const timer = React.useRef();
  const wrapperRef = React.useRef(null);
  const autoTransitionDuration = React.useRef();
  const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === 'horizontal';
  const size = isHorizontal ? 'width' : 'height';
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const nodeRef = React.useRef(null);
  const handleRef = (0, utils$1.useForkRef)(ref, nodeRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }

    node.style[size] = collapsedSize;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }

    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = (0, utils.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = `${wrapperSize}px`;
    node.style.transitionTimingFunction = transitionTimingFunction;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback(node => {
    node.style[size] = `${getWrapperSize()}px`;

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback(node => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = (0, utils.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });

    if (timeout === 'auto') {
      // TODO: rename getAutoHeightDuration to something more generic (width support)
      // Actually it just calculates animation duration based on size
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;

    if (onExiting) {
      onExiting(node);
    }
  });

  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }

    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/(0, jsxRuntime.jsx)(TransitionComponent, (0, _extends2.default)({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => /*#__PURE__*/(0, jsxRuntime.jsx)(CollapseRoot, (0, _extends2.default)({
      as: component,
      className: (0, _clsx.default)(classes.root, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedSize === '0px' && classes.hidden
      }[state]),
      style: (0, _extends2.default)({
        [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize
      }, style),
      ownerState: (0, _extends2.default)({}, ownerState, {
        state
      }),
      ref: handleRef
    }, childProps, {
      children: /*#__PURE__*/(0, jsxRuntime.jsx)(CollapseWrapper, {
        ownerState: (0, _extends2.default)({}, ownerState, {
          state
        }),
        className: classes.wrapper,
        ref: wrapperRef,
        children: /*#__PURE__*/(0, jsxRuntime.jsx)(CollapseWrapperInner, {
          ownerState: (0, _extends2.default)({}, ownerState, {
            state
          }),
          className: classes.wrapperInner,
          children: children
        })
      })
    }))
  }));
});
Collapse.muiSupportAuto = true;
var _default = Collapse;
exports.default = _default;
});

var Collapse = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  collapseClasses: true
};
Object.defineProperty(exports, "collapseClasses", {
  enumerable: true,
  get: function () {
    return _collapseClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Collapse.default;
  }
});

var _Collapse = interopRequireDefault(Collapse_1);

var _collapseClasses = _interopRequireWildcard(collapseClasses_1);

Object.keys(_collapseClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _collapseClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _collapseClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Collapse);

export default __pika_web_default_export_for_treeshaking__;
